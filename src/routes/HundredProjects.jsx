import propTypes from 'prop-types'
import { plainTexts } from '../utils/texts'
import inConstruction from '../assets/images/construction/in-construction.svg'
import './HundredProjects.css'

export const HundredProjects = ({ lang }) => {
  const hundredProjectsPageTexts = plainTexts[lang].hundredProjectsPage
  return (
    <main className='hundred--projects--page'>
      <h1 className='title--1'>{hundredProjectsPageTexts.name}</h1>
      <p className='hundred--description'>{hundredProjectsPageTexts.desc}</p>
      <h2 className='title--2'>In construction</h2>
      <img src={inConstruction} alt="Site in construction" className='construction--img' />
    </main>
  )
}

HundredProjects.propTypes = {
    lang: propTypes.string.isRequired,
}
