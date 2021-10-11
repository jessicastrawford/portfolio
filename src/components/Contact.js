import { SocialIcon } from 'react-social-icons'

function Contact() {
  return (
    <section className="contact-page" id="contact">
      <h1>Contact Details.</h1>
      <p>Please feel free to look at my work and contact me on the below links.</p>
      <div className="icons">
        <div className="social">
          <SocialIcon url="https://www.instagram.com/jessicapeony_/?hl=en" 
            bgColor="#CB997E" 
            className="link instagram"/>
        </div>
        <div className="social">
          <SocialIcon url="https://github.com/jessicastrawford" 
            bgColor="#CB997E" 
            className="link github"/>
        </div>
        <div className="social">
          <SocialIcon url="https://www.linkedin.com/in/jessica-strawford-a63117145/" 
            bgColor="#CB997E"
            className="link linkdin"/>
        </div>
        <div className="social">
          <SocialIcon url="mailto:jessicastrawford@gmail.com" 
            bgColor="#CB997E"
            className="link email"/>
        </div>
      </div>
    </section>
  )
}

export default Contact