import React from 'react'
import dailyBlogImg from '../images/dailyblog.png'
import gamersHavenImg from '../images/gamershavenapp.png'
import musicWebAppImg from '../images/musicwebapp.png'


const Portfolio = () => {

  const projects = [
    
    {id: 1, name: 'Daily Blog', 
      image: dailyBlogImg, 
      deployed: 'https://tech-bloggg.herokuapp.com/', 
      repo: 'https://github.com/begin0071/tech-blog'},

      {id: 2, name: 'Gamers Haven App', 
      image: gamersHavenImg, 
      deployed: 'https://gamers-haven.herokuapp.com', 
      repo: 'https://github.com/christopherrclark/gaming-blog'},

      {id: 3, name: 'Music Web App aka Banana Music', 
      image: musicWebAppImg, 
      deployed: 'https://zachshouts.github.io/music-web-app/', 
      repo: 'https://github.com/zachshouts/music-web-app'},

      

  ]

  return (
    <div className="big-project-container">
      
      {projects.map(project => (
        
        <div className="project-container" key={project.id}>
          
          <div className="project-image-container">
            
            <a className="project-link" href={project.deployed} target="blank">
              <img className="project-image" src={project.image} alt={project.name}/>
            </a>
          
          </div>

          <div className="project-text-container">
            
            <h4 className="project-name">{project.name}</h4>
            
            <div className="project-text">
              <div className="project-links">
                
                <div>
                  <a className='project-link' href={project.deployed} target="blank">Deployed Page</a>
                </div>
                
                <div>
                  <a className='project-link' href={project.repo} target="blank">GitHub</a>
                </div>
              
              </div>
            </div>
          
          </div>
          
        </div>
      
      ))}
    
    </div>
  )
}

export default Portfolio