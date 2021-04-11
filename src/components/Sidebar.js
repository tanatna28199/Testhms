import React from 'react'


const Sidebar = () => {
    // let fullname ='tanat '
    const [fullname, setFullname] = React.useState('tanat')
    const [isShow, setIsShow] = React.useState(true)
    const changeName = () =>{
            setFullname ('buakew')
            setIsShow(!isShow)
            
    }

    React.useEffect(()=>{
        console.log ('sidebar useEffect'
        )  
    })
    React.useEffect(()=>{
        console.log ('sidebar useEffect one time only'
        )  
    },[])

    React.useEffect(()=>{
        console.log ('sidebar useEffect=>' + fullname
        )  
    },[fullname])
    
    
    return (
        <>
          <h3>Sidebar</h3>  
          {
              isShow ? <p>Hello</p> : <p>world</p>
          }
          <p>
              สวัสดี{fullname}
          </p>
          <button onClick={changeName}>เปลี่ยนชื่อ</button>
        </>
    )
}

export default Sidebar
