import propTypes from 'prop-types'
import { getIconArray } from '../utils/getIconArray'
import { hundredProjectsPageTexts, techs } from '../utils/texts'
import { ProjectCard } from '../components/ProjectCard'
import ScrollToTop from '../components/ScrollToTop'
import './HundredProjects.css'

export const HundredProjects = ({ lang }) => {
  const text = hundredProjectsPageTexts[lang]
  const links = text.links
  return (
    <>
      <ScrollToTop />
      <main className='hundred--projects--page'>
        <h1 className='hp--title--1'>{text.title}</h1>
        <p className='hundred--description'>{text.description}</p>
        <div className='flex--row hundred--projects--container'>
          {
            text.projects.map(({ name, day, imageSrc, techsList }) => {
              return (
                <ProjectCard 
                  key={day}
                  referenceImg={imageSrc}
                  name={name}
                  desc={day}
                  techsList={getIconArray(techsList, techs)}
                  link={links.link + day.toLowerCase().replace(' ', '-')}
                  githubLink={links.githubLink + day.toLowerCase().replace(' ', '-')}
                  isLink={true}
                  lang={lang}
                />
              )
            })
          }
        </div>
      </main>
    </>
  )
}

HundredProjects.propTypes = {
    lang: propTypes.string.isRequired,
}
