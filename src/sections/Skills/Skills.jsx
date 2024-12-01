import propTypes from 'prop-types'
import { plainTexts, techs } from '../../utils/texts'
import './Skills.css'
import { getIconArray } from '../../utils/getIconArray'

export const Skills = ({ lang }) => {
  const skillsInfo = plainTexts[lang].main.skills
  return (
    <section id={skillsInfo.id} className='skills'>
        <h2 className='title--2'>{skillsInfo.title}</h2>
        <div className='skills--techs--container'>
          {
            getIconArray( skillsInfo.skillsList, techs ).map(tech => {
              return (
                <div key={tech.name} className='flex--column skill'>
                  <img src={tech.src} alt={tech.altText[lang]} className='skill--tech--img' />
                  <p className='skill--name'>{tech.name}</p>
                </div>
              )
            })
          }
        </div>
    </section>
  )
}

Skills.propTypes = {
  lang: propTypes.string.isRequired,
}