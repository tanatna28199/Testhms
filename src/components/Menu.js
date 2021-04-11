import React from 'react'
import useHover from '../hooks/UseHover'

const Menu = () => {
    const [hover, attrs] = useHover()
    
    

    return (
        <div>
            <h1>Menu</h1>
            {
                hover ? <h3>เมนูหลัก</h3> : null
            }
            <img {...attrs} src ="./HMSLOGO.png" width='500' alt = "logo"/>  
        </div>
    )
}

export default Menu
