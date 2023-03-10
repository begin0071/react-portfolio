import React from 'react'


const Navigation = ({current, setCurrent}) => {
  return (
    <div>
      <nav class = "header">
        <h1>Mugees Khaki</h1>
        <h2>Web Developer</h2>
        <div className = "menu">
        <p className = "navItem" onClick={()=>setCurrent("resume")}>Resume</p>
          <p className = "navItem" onClick={()=>setCurrent("about me")}>About Me</p>
          <p className = "navItem" onClick={()=>setCurrent("portfolio")}>My Portfolio</p>
          <p className = "navItem" onClick={()=>setCurrent("contact me")}>Contact Me</p>
        </div>
      </nav>
      
    </div>



  )
}

export default Navigation


