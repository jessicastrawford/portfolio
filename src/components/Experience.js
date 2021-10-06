import generalAssemblyImage from '../assets/general_assembly.png'
import codeFirstGirlsImage from '../assets/code_first_girls.png'
import codeacademyImage from '../assets/codeacademy.png'
import timelineImage from '../assets/timeline_three.png'
import longerTimelineImage from '../assets/long-timeline.png'
import jessicaLogo from '../assets/jessicastrawford.png'
import jessicaPeonyLogo from '../assets/jessicastrawford.jpg'
import uncommonLogo from '../assets/uncommon.png'
import lauraAshleyLogo from '../assets/laura-ashley-logo.png'

function Experience() {
  return (
    <section className="experience-section">
      <h1 id="experience">Experience.</h1>
      <div className="section">
        <div>
          <img src={timelineImage} alt="timeline image" className="timeline"/>
        </div>
        <div>
          <div className="experience-blocks">
            <div>
              <img src={generalAssemblyImage} className="logo-image" alt="logo"/>
            </div>
            <div>
              <h3>General Assembly</h3>
              <p>General Assembly - Software Engineering Immersive Course London (remote), June 2021 - September 2021
              </p>
              <p>
      A 12 week immersive Software Engineering course that covered a wide range of languages, frameworks and tools to create full stack applications. During the 12 weeks we had daily stand-ups, online lessons, labs, pair coding, homework and built 4 projects - both individual and group, using Git and GitHub frequently.
              </p>
            </div>
          </div>
          <div className="experience-blocks">
            <div>
              <img src={codeFirstGirlsImage} className="logo-image" alt="logo"/>
            </div>
            <div>
              <h3>Code First Girls</h3>
              <p>Python Programming Course (remote), May 2021 - July 2021 
              </p>
              <p>I was awarded a sponsorship by Natwest to complete a Python Programming course. I created a program for users to search recipes based on an ingredient, using API’s, storing the results in dictionaries. I presented my project to a panel of judges and received a certificate. 
              </p>
            </div>
          </div>
          <div className="experience-blocks">
            <div>
              <img src={codeacademyImage} className="logo-image" alt="logo"/>
            </div>
            <div>
              <h3>Code First Girls</h3>
              <p>Python Programming Course (remote), May 2021 - July 2021 
              </p>
              <p>I was awarded a sponsorship by Natwest to complete a Python Programming course. I created a program for users to search recipes based on an ingredient, using API’s, storing the results in dictionaries. I presented my project to a panel of judges and received a certificate. 
              </p>
            </div>
          </div>
        </div>
      </div>
      <h1>Previous Experience. </h1>
      <div className="section">
        <div>
          <img src={longerTimelineImage} alt="timeline image" className="longer-timeline"/>
        </div>
        <div>
          <div className="experience-blocks">
            <div>
              <img src={jessicaLogo} className="logo-image" alt="logo"/>
            </div>
            <div>
              <h3>Freelance Fashion Designer</h3>
              <p>London, September 2020 - March 2021 </p>
              <ul>
                <li>
                Designed and created mood, fabric and print boards, designing an 18 piece collection to run alongside for supplier Trent Westside and brand Floral Street. 
                </li>
                <li>
                Designed and made a range of beach style kimono dresses cut from second hand Saris to be sold in store for an upcoming brand. 
                </li>
              </ul>
            </div>
          </div>
          <div className="experience-blocks first">
            <div>
              <img src={jessicaPeonyLogo} className="logo-image" alt="logo"/>
            </div>
            <div>
              <h3>Creative Director & Designer, Jessica Peony</h3>
              <p>London, May 2020 - March 2021</p>
              <ul>
                <li>
                During the pandemic I decided to launch a bespoke and sustainable fashion brand, creating and selling online a range of dresses and creating facemasks with the offcuts.
                </li>
              </ul>
            </div>
          </div>
          <div className="experience-blocks second">
            <div>
              <img src={uncommonLogo} className="logo-image" alt="logo"/>
            </div>
            <div>
              <h3>Web Developer & Visual Merchandiser for Boutique Shop, Un-Common</h3>
              <p>London, May 2020 - March 2021</p>
              <ul>
                <li>
                Self taught HTML to create a website through Shopify, with an online shop and weekly updated news blogs.
                </li>
                <li>
                Created in-store and shop window displays.
                </li>
              </ul>
            </div>
          </div>
          <div className="experience-blocks third">
            <div>
              <img src={lauraAshleyLogo} className="logo-image" alt="logo"/>
            </div>
            <div className="fourth">
              <h3>Assistant Designer, Laura Ashley </h3>
              <p>London, April 2019 - June 2020</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience