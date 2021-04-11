import React from 'react'
import {logo , title } from '../styles/style'
import useHover from '../hooks/UseHover'

const Logo = () => {
    const [hover, attrs ] = useHover()
    const logoImage = {
        url: './HMSLOGO.png'
    }
    
    return (
        <div>
            {/* <imag src="./HMSLOGO.png" width ="100" alt="logo" /> */}
            <h3 style={title}>Logo</h3>
            {
                hover ? <p>Hello Logo</p> : null
            }
            <img {...attrs} style={logo} src={logoImage.url} width ="256" alt="logo" />
        </div>
    )
}

export default Logo
