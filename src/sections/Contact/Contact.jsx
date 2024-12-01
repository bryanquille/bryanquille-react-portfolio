import propTypes from 'prop-types'
import { useRef, useState } from 'react'
import { plainTexts } from '../../utils/texts'
import Loader from '../../components/Loader'
import emailjs from '@emailjs/browser'
import './Contact.css'

export const Contact = ({ lang }) => {
  const contactText = plainTexts[lang].main.contact
  const formText = contactText.form
  
  const form = useRef()

  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [fail, setFail] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setSending(true)
    emailjs
      .sendForm('bq_portfolio_0894', 'template_r31rrof', form.current, {
        publicKey: '_19LRbot-FWV6Wkqu',
      })
      .then(
        () => {
          setTimeout(() => {
            setSent(true)
          }, 500)
          setTimeout(()=>{
            setSending(false)
          }, 2000)
          setTimeout(()=>{
            setSent(false)
          }, 4000)
          form.current.reset()
        },
        (error) => {
          setFail(true)
          setTimeout(()=>{
            setSending(false)
            setFail(false)
          }, 3500)
          console.log('FAILED...', error.text)
        },
    )
  }

  return (
    <section className='flex--column contact' id={contactText.id}>
      <h2 className='title--2'>{contactText.title}</h2>
      <p className='contact--desc'>{contactText.desc}</p>
      <form ref={form} onSubmit={sendEmail} className='contact--form'>
        <label className='contact--labels' htmlFor="user_name">{formText.name.label}</label>
        <input type="text" name="user_name" id="user_name" className='contact--input' placeholder={formText.name.placeholder} required autoComplete='on' />
        <label className='contact--labels' htmlFor="user_email">{formText.email.label}</label>
        <input type="email" name="user_email" id="user_email" className='contact--input' placeholder={formText.email.placeholder} required autoComplete='on' />
        <label className='contact--labels' htmlFor="message">{formText.message.label}</label>
        <textarea name="message" id="message" rows={5} className='contact--textarea' required placeholder={formText.message.placeholder}></textarea>
        <button type="submit" className='contact--btn'>{formText.button}</button>
        <div 
          className={
            `flex--row ${
              sending
                ? "success--screen" 
                : "hidden--success"
            }`
          }
        >
          {
            sending 
              ? fail
                ? "❗⚠️"
                : sent 
                    ? "✅" 
                    : <Loader />
              : ""
          }
        </div>
      </form>
    </section>
  )
}

Contact.propTypes = {
    lang: propTypes.string.isRequired,
}
