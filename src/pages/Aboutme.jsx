import React from 'react'

import MyImage from "../images/solo.jpg"

const Aboutme = () => {
  return (
    <div className='about'>
      <div className = "picContainer">
        <img src={MyImage} alt="Portriat" className = "pic"/>
      </div>
      
      <p>Over the course of a 12-week intensive program, I had the opportunity to develop and hone my skills in a diverse range of computer science areas. From browser-based technologies to server-side development, API design, and deployment and delivery, I gained comprehensive exposure to the latest industry trends and best practices. Led by experienced professionals, the program consisted of 22 units and culminated in 3 group projects that allowed me to gain valuable hands-on experience. Throughout the course of these projects, I developed a solid foundation in HTML, CSS, and JavaScript and gained practical insights into real-world software development. Overall, I am confident that this program has prepared me well for a successful career in the software development industry. </p>
    </div>
  )
}

export default Aboutme


