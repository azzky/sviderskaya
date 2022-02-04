import React from "react"

import {
    LogoWrapper,
    LogoImage,
} from './styled'

const Logo = () => (
        <LogoWrapper to={'/'}>
            <LogoImage src="/logo.svg"
                       alt="logo"
                       width="81"
                       height="17" />
        </LogoWrapper>
    )

export default Logo