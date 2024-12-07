import propTypes from 'prop-types'
import { AboutMe } from '../sections/AboutMe/AboutMe.jsx'
import { Projects } from '../sections/Projects/Projects.jsx'
import { Skills } from '../sections/Skills/Skills.jsx'
import { Contact } from '../sections/Contact/Contact.jsx'

export const Home = ({ lang }) => {
  
  return (
    <main>
      <AboutMe lang={lang} />
      <Projects lang={lang} />
      <Skills lang={lang} />
      <Contact lang={lang} />
    </main>
  )
}

Home.propTypes = {
    lang: propTypes.string.isRequired,
}
