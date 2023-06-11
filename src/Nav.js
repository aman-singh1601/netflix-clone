import React, { useEffect, useState } from 'react'
import './Nav.css'



function Nav() {
    const [show,setShow]=useState(false)
   
    useEffect(()=>{
        const handleScroll= ()=>{
            if(window.scrollY>150){
                setShow(true);
            }else setShow(false);
    }
        window.addEventListener('scroll',handleScroll)
        return ()=>{
            window.removeEventListener("scroll",handleScroll);
        };
    },[])

  return (
    <div className={`Nav ${show && 'Nav_black'}`}>
        <img 
        className='Netflix-logo'
        src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
        alt='NETFLIX' 
        />
        <img 
        className='user-logo'
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
        alt='AVATAR' 
        />
    </div>
  )
}

export default Nav