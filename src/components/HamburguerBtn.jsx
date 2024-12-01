import propTypes from 'prop-types'
import './HamburguerBtn.css'

export const HamburguerBtn = ({ activateBtn, handleClick }) => {
  return (
    <button type='button' onClick={handleClick} className='hamburguer--btn'>
      <span className={activateBtn ? 'bar convert--xtop': 'bar'}></span>
      <span className={activateBtn ? 'bar convert--xmiddle': 'bar'}></span>
      <span className={activateBtn ? 'bar convert--xbottom': 'bar'}></span>
    </button>
  )
}

HamburguerBtn.propTypes = {
  activateBtn: propTypes.bool.isRequired,
  handleClick: propTypes.func.isRequired
}
