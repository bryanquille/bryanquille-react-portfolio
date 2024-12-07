import propTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './ProjectCard.css'

export const ProjectCard = ({ 
    referenceImg, 
    name, 
    desc, 
    techsList, 
    link, 
    githubLink,
    isLink,
    pageRoute,
    lang 
  }) => {
  return (
    <article className="card" style={{ backgroundImage: `url(${referenceImg})` }}>
      <div className='flex--column card--info'>
        <h3 className="title--3">{name}</h3>
        <p className='card--desc'>{desc}</p>
        <div className='flex--row techs--container'>
          {techsList.map(({name, altText, src}) => <img key={name} src={src} alt={altText[lang]} className='card--tech--img' />)}
        </div>
        <div className='flex--row card--links--container'>
          {
            isLink 
              ? githubLink != ""
                ? <>
                    <a href={link} target='_blank'>
                      <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#d3d3d3" className='card--link'><title>Preview</title><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-480H200v480Zm280-80q-82 0-146.5-44.5T240-440q29-71 93.5-115.5T480-600q82 0 146.5 44.5T720-440q-29 71-93.5 115.5T480-280Zm0-60q56 0 102-26.5t72-73.5q-26-47-72-73.5T480-540q-56 0-102 26.5T306-440q26 47 72 73.5T480-340Zm0-100Zm0 60q25 0 42.5-17.5T540-440q0-25-17.5-42.5T480-500q-25 0-42.5 17.5T420-440q0 25 17.5 42.5T480-380Z"/></svg>
                    </a>
                    <a href={githubLink} target='_blank'>
                      <svg role="img" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="40px" fill="#d3d3d3" className='card--link'><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                    </a>
                  </>
                : <a href={link} target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#d3d3d3" className='card--link'><title>Preview</title><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-480H200v480Zm280-80q-82 0-146.5-44.5T240-440q29-71 93.5-115.5T480-600q82 0 146.5 44.5T720-440q-29 71-93.5 115.5T480-280Zm0-60q56 0 102-26.5t72-73.5q-26-47-72-73.5T480-540q-56 0-102 26.5T306-440q26 47 72 73.5T480-340Zm0-100Zm0 60q25 0 42.5-17.5T540-440q0-25-17.5-42.5T480-500q-25 0-42.5 17.5T420-440q0 25 17.5 42.5T480-380Z"/></svg>
                  </a>
              : <Link to={pageRoute}>
                  <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#d3d3d3" className='card--link'><title>Preview</title><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-480H200v480Zm280-80q-82 0-146.5-44.5T240-440q29-71 93.5-115.5T480-600q82 0 146.5 44.5T720-440q-29 71-93.5 115.5T480-280Zm0-60q56 0 102-26.5t72-73.5q-26-47-72-73.5T480-540q-56 0-102 26.5T306-440q26 47 72 73.5T480-340Zm0-100Zm0 60q25 0 42.5-17.5T540-440q0-25-17.5-42.5T480-500q-25 0-42.5 17.5T420-440q0 25 17.5 42.5T480-380Z"/></svg>
                </Link>
          }
        </div>
      </div>
    </article>
  )
}

ProjectCard.propTypes = {
    referenceImg: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    desc: propTypes.string.isRequired,
    techsList: propTypes.array.isRequired,
    link: propTypes.string,
    githubLink:propTypes.string,
    isLink: propTypes.bool.isRequired,
    pageRoute: propTypes.string,
    lang: propTypes.string.isRequired,
}