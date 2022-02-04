import React, {useState} from "react"
import Logo from './Logo'
import Navigation from './Navigation'

import {
    HeaderRoot,
} from './styled'

const Header = () => {
    const [showMenu, toggleMenu] = useState(false)

    return(
    <HeaderRoot active={showMenu}>
        <Logo />
        <Navigation active={showMenu}
                    toggleMenu={toggleMenu} />
    </HeaderRoot>
)}

export default Header