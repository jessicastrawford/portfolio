import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SocialIcon } from 'react-social-icons'

function Home() {
  return (
    <section className="title">
      <div className="title-image">
        <h1 className="name">&lt; Jessica Strawford &gt;</h1>
        <p className="job-position">&lt; Junior Software Developer &gt;</p>
        <div className="social">
          <SocialIcon url="https://github.com/jessicastrawford" 
            bgColor="#CB997E" 
            className="github"/>
          <SocialIcon url="https://www.linkedin.com/in/jessica-strawford-a63117145/" 
            bgColor="#CB997E"
            className="linkdin"/>
        </div>
      </div>
      <div className="arrow bounce">
        <a href="#about"><FontAwesomeIcon icon={faChevronDown} className="chevron"/></a>
      </div>
    </section>
  )
}

export default Home