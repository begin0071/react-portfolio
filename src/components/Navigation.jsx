import React from 'react'


const Navigation = ({current, setCurrent}) => {
  return (
    <div>
      <nav class = "header">
        <h1>Mugees Khaki</h1>
        <div className = "menu">
          <p className = "navItem" onClick={()=>setCurrent("about me")}>About</p>
          <p className = "navItem" onClick={()=>setCurrent("portfolio")}>Portfolio</p>
          <p className = "navItem" onClick={()=>setCurrent("contact me")}>Contact</p>
          <p className = "navItem" onClick={()=>setCurrent("resume")}>Resume</p>
        </div>
      </nav>
      
    </div>



  )
}

export default Navigation


