import propTypes from 'prop-types'
import { HashLink as Link } from 'react-router-hash-link'
import { plainTexts } from '../utils/texts'
import { deleteSpacesFromText } from '../utils/deleteSpacesFromText'
import './Navbar.css'

const NavItem = ({ anchor, handleClick, children }) => {
  return (
    <li>
      <Link to={anchor} className='navlink' onClick={handleClick}>
        {children}
      </Link>
    </li>
  )
}

export const Navbar = ({ showMenu, handleClick, lang }) => {
  return (
    <nav className={showMenu ? 'navbar navbar--visible' : 'navbar navbar--hidden'}>
      <ul className='navlist'>
        {
          plainTexts[lang].header.navbar.navItems.map(item => {
            return <NavItem key={item} anchor={`/#${deleteSpacesFromText(item)}`} handleClick={handleClick}>{item}</NavItem>
          })
        }
      </ul>  
    </nav>
  )
}

NavItem.propTypes = {
    anchor: propTypes.string.isRequired,
    handleClick: propTypes.func.isRequired,
    children: propTypes.string.isRequired
}

Navbar.propTypes = {
    showMenu: propTypes.bool.isRequired,
    handleClick: propTypes.func.isRequired,
    lang: propTypes.string.isRequired,
}
