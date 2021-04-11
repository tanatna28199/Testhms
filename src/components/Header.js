import React from 'react'
import LOGO from './Logo'
import Title from '../styles/title/Title'
import {Button} from '../styles/button/Button'

const Header = () => {
    let companyName = 'PEA'
    const companyAddress = <p>Bankok</p>
    const isLogin = true
    const showMessage = () => {
        return companyName + '.com'
    }
    const showme = () =>
        alert("ยินดีต้อนรับ")
    const products =[
        {id: 1 , name:'Cake'},
        {id: 2 , name: 'Pepsi'}
    
    ]
    return (
        <>
            <Title>กราบสวัสดีครับ</Title>
            <h1>HOTLINE MANAGEMENY SYSTEM</h1>
            <h2>บริษัท {companyName}</h2>
            {companyAddress}
            {showMessage()}
            <hr/>
            {isLogin && 
            <>
            <p> ยินดีด้วย </p>
            <p> ยินดีด้วย </p>
            </>
            }
            {isLogin ? <LOGO/> : 'เสียใจด้วย'}
            <br/>
            <Button onClick={showme}>Click Me</Button>
            <button onClick={showme}>Click Me</button>
            <br/>
            <ul>
                
                {
                    products.map((product, index) => {
                      return(
                          <li key={product.id}>{product.name}</li>
                         )
                     })
                 }
            </ul>

        </>
    )
}

export default Header
