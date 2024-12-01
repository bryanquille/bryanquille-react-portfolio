import { useState, useEffect } from "react"

export const useShowMenu = () => {
const [showMenu, setShowMenu] = useState(false)

  useEffect(() => {
    if (showMenu) {
      document.body.classList.add('no--scroll')
    } else {
      document.body.classList.remove('no--scroll')
    }

    return () => { document.body.classList.remove('no--scroll') }
  }, [showMenu])

  const handleClick = () => {
    setShowMenu((prev) => !prev)
  }

  const handleLinkClick = ()  => {
    setShowMenu(false)
  }

  return {
    showMenu,
    handleClick,
    handleLinkClick
  }
}
