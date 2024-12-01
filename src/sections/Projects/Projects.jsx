import propTypes from 'prop-types'
import { techs, plainTexts } from "../../utils/texts"
import { getIconArray } from '../../utils/getIconArray'
import { ProjectCard } from "../../components/ProjectCard"
import './Projects.css'

export const Projects = ({ lang }) => {
  const projectsText = plainTexts[lang].main.projects
  const cardInfo = projectsText.cardInfo
  const hundredProjectsInfo = projectsText.hundredProjects

  const showProjects = () => {
    console.log("It opens the modal to show 100 projects");
  }

  return (
    <section className="flex--column projects" id={projectsText.id}>
      <h2 className="title--2">{projectsText.title}</h2>
      <div className="flex--row cards--container">
          {
            cardInfo.map(({ name, desc, techsList, link, githubLink, referenceImg }) => {
              return (
                <ProjectCard 
                  key={name}
                  referenceImg={referenceImg}
                  name={name}
                  desc={desc}
                  techsList={getIconArray(techsList, techs)}
                  link={link}
                  githubLink={githubLink}
                  isLink={true}
                  lang={lang}
                />
              )
            })
          }
          <ProjectCard
            referenceImg={hundredProjectsInfo.referenceImg}
            name={hundredProjectsInfo.name}
            desc={hundredProjectsInfo.desc}
            techsList={getIconArray(hundredProjectsInfo.techsList, techs)}
            isLink={false}
            showProjects={showProjects}
            lang={lang}
          />
      </div>
    </section>
  )
}

Projects.propTypes = {
    lang: propTypes.string.isRequired,
}
