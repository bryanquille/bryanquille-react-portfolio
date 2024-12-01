import { plainTexts } from "../../utils/texts"
import parse from 'html-react-parser'
import propTypes from 'prop-types'
import BQavatar from '../../assets/images/avatar/bq-avatar.jpg'
import './AboutMe.css'

const SocialLink = ({ link, children }) => {
  return (
    <a href={link} className="social--link" target="_blank">
      {children}
    </a>
  )
}

export const AboutMe = ({ lang }) => {
  const aboutMeTexts = plainTexts[lang].main.about

  return (
    <section id={aboutMeTexts.id} className="aboutme flex--column">
      <div className="about--info--container flex--column">
        <h1 className="title--1">
          <span className="greeting">{aboutMeTexts.introducing.topText}</span>
          <br />
          <span className="my--name">
            <span className="highlight--letter">{aboutMeTexts.introducing.letterB}</span>
            <span>{aboutMeTexts.introducing.continueName}</span>
            <span> </span>
            <span className="highlight--letter">{aboutMeTexts.introducing.letterQ}</span>
            <span>{aboutMeTexts.introducing.continueLastName}</span>
          </span>
        </h1>
        <p className="profession">{aboutMeTexts.profession}</p>
        <div className="flex--row social--links--container">
          {
            aboutMeTexts.contactInfo.map(({ name, link, svg }) => {
              return <SocialLink key={name} link={link}>{parse(svg)}</SocialLink>
            })
          }
        </div>
      </div>
      <img src={BQavatar} alt={"Avatar"} className="avatar" />
    </section>
  )
}

SocialLink.propTypes = {
  link: propTypes.string.isRequired,
  children: propTypes.object.isRequired,
}

AboutMe.propTypes = {
    lang: propTypes.string.isRequired,
}
