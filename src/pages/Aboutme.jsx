import React from 'react'

import MyImage from "../images/solo.jpg"

const Aboutme = () => {
  return (
    <div className='about'>
      <div className = "picContainer">
        <img src={MyImage} alt="Portriat" className = "pic"/>
      </div>
      
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos deserunt ducimus molestiae dicta ad ea quas, voluptas magni distinctio asperiores delectus cumque minus odit similique doloribus iste nulla! Sit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, dicta fugiat corporis harum impedit cum adipisci accusamus voluptates sit ipsa non quos hic magnam repellendus corrupti incidunt odio perspiciatis quod.</p>
    </div>
  )
}

export default Aboutme


