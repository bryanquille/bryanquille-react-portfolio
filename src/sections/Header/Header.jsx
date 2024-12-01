import propTypes from 'prop-types'
import { HamburguerBtn } from '../../components/HamburguerBtn'
import { Navbar } from '../../components/Navbar'
import { plainTexts } from '../../utils/texts'
import './Header.css'
import { useShowMenu } from '../../hooks/useShowMenu'

export const Header = ({ logoImgSrc, lang }) => {
  const { showMenu, handleClick, handleLinkClick } = useShowMenu()

  return (
    <header className='header'>
      <a href="/">
        <img src={logoImgSrc} alt={plainTexts[lang].header.logo.altText} className='logo--img' />
      </a>
      <HamburguerBtn activateBtn={showMenu} handleClick={handleClick} />
      <Navbar showMenu={showMenu} handleClick={handleLinkClick} lang={lang} />
    </header>
  )
}

Header.propTypes = {
  logoImgSrc: propTypes.string.isRequired,
  lang: propTypes.string.isRequired,
}
