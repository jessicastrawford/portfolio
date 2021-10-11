import designFeedImage from '../assets/design_feed.png'
import awayDaysImage from '../assets/away_days.png'
import bookcationImage from '../assets/bookcation.png'
import createYourOwnCanvasImage from '../assets/create_your_own_canvas.png'


function MyWork() {
  return (
    <>
      <h1 id="projects" className="projects-title">My Projects.</h1>
      <div className="projects-section">
        <section className="projects">
          <div className="top-layer">
            <img src={designFeedImage} alt="design feed image on laptop" className="laptop-image"/>
            <h3>Design Feed</h3>
            <div className="project-paragraph">
              <p>A solo project completed in a week. I built a full stack RESTful application building both the frontend and backend with full CRUD functionality. My idea was to create an app where users can communicate with one another, uploading their designs for feedback. The project consisted of users being able to upload and save one another&apos;s work, comment on the uploaded designs and an editable profile section which shared their work and saved designs, giving a social media feel. 
              </p>
              <p><span className="tech-title">Technologies used:</span> HTML5, CSS3, SASS, JavaScript, React.js, Axios, Python3, Django, TablePlus, Insomnia, Git, GitHub, Material UI, Heroku, Netlify. </p>
            </div>
            <a href="https://design-feed.netlify.app/" target="_blank" rel="noreferrer"><button className="button">Website</button> </a>
            <a href="https://github.com/jessicastrawford/project-four-frontend#readme" target="_blank" rel="noreferrer"><button className="button">ReadMe</button></a>
          </div>
          <div className="box-one"></div>
          <div className="top-layer">
            <img src={awayDaysImage} alt="away days image on laptop" className="laptop-image"/>
            <h3>Away Days</h3>
            <div className="project-paragraph">
              <p>A three person project completed over 9 days. We created a full stack MERN application after a week&apos;s learning of Node.js, Express and React, building both the backend API and the frontend app. Our idea was to create an app where users could plan their perfect away day. I had full responsibility for all of the CSS and framework of the app and receiving the data from the backend to display in the frontend. I worked heavily on creating comment sections and user interactions around the page. 
              </p>
              <p><span className="tech-title">Technologies used:</span> HTML5, CSS3, SASS, JavaScript, React.js, Axios, MongoDB, Mongoose, Node.js, Express, GitHub, Git, Bootstrap, Trello, Heroku, Netlify.</p>
            </div>
            <a href="https://away-days-app.netlify.app/" target="_blank" rel="noreferrer"><button className="button">Website</button></a>
            <a href="https://github.com/jessicastrawford/project-three-frontend#readme" target="_blank" rel="noreferrer"><button className="button">ReadMe</button></a>
          </div>
          <div className="box-two"></div>
          <div className="top-layer">
            <img src={bookcationImage} alt="bookcation image on laptop" className="laptop-image"/>
            <h3>Bookcation</h3>
            <div className="project-paragraph">
              <p>A pair coded project that was completed in 48 hours, which involved creating a multi page app with the public API, go-weather. We created an app where users could search for a desired book and be taken to a page where you could see where the book was based, and the current weather of the city. This project was a great experience to learn the skills to pair code, troubleshooting and working efficiently in a short timeframe. 
              </p>
              <p><span className="tech-title">Technologies used:</span> HTML5, CSS3, SASS, React.js, JavaScript, Axios, GitHub, Git, Bulma, Trello, Netlify.
              </p>
            </div>
            <a href="https://bookcation-app.netlify.app/" target="_blank" rel="noreferrer"><button className="button">Website</button></a>
            <a href="https://github.com/jessicastrawford/SEI-project-two-1#readme" target="_blank" rel="noreferrer"><button className="button">ReadMe</button></a>
          </div>
          <div className="box-three"></div>
          <div className="top-layer">
            <img src={createYourOwnCanvasImage} alt="create your own canvas image on laptop" className="laptop-image"/>
            <h3>Create Your Own Canvas</h3>
            <div className="project-paragraph">
              <p>A solo project where I recreated the classic game ‘Frogger’ in a weeks time frame. This project was a great way to enhance my JavaScript understanding of functions and classes. 
              </p>
              <p><span className="tech-title">Technologies used:</span>HTML5, CSS3, JavaScript, GitHub, Git.
              </p>
            </div>
            <a href="https://jessicastrawford.github.io/sei-project-one/" target="_blank" rel="noreferrer"><button className="button">Website</button></a>
            <a href="https://github.com/jessicastrawford/sei-project-one#readme" target="_blank" rel="noreferrer"><button className="button">ReadMe</button></a>
          </div>
          <div className="box-four"></div>
        </section>
      </div>
    </>
  )
}

export default MyWork