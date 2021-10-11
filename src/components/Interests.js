// import { Carousel } from '@trendyol-js/react-carousel'
// import Slider from 'react-slick'
// import SimpleReactLightbox from 'simple-react-lightbox'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import image1 from '../assets/jessicapeony_two.jpg'
import image2 from '../assets/jessicapeony_one.jpg'
import image3 from '../assets/jessicapeony_three.jpg'
import image4 from '../assets/jessicapeony_four.jpg'
import image5 from '../assets/jessicapeony_five.jpg'
import image6 from '../assets/jessicapeony_six.jpg'
import image7 from '../assets/jessicapeony_seven.jpg'
import image8 from '../assets/jessicapeony_eight.jpg'
import image9 from '../assets/jessicapeony_nine.JPG'
import image10 from '../assets/jessicapeony_ten.JPG'
import image11 from '../assets/jessicapeony_eleven.JPG'


function Interests() {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <section id="interests" className="interests">
      <h1>My Interests.</h1>
      <div className="interests-section">
        <div>
          <p className="interests-paragraph left">During my free time, I love exploring London as I find it incredibly inspirational. I will often go to an art gallery or a fashion exhibition on the weekends, Tate Modern being one of my obvious favourites. Additionally, I find that designing clothes and painting abstract canvases brings me huge amounts of joy. </p>
        </div>
        <div>
          <p className="interests-paragraph">I stay fit and healthy by going to the gym and I love jogging in the parks with friends, before enjoying a delicious brunch on a Sunday morning. </p>
          <p className="interests-paragraph">Sailing is also a keen interest of mine, and I have become very passionate about it over the last few months as the thrill is addictive!
          </p>
        </div>
      </div>
      <h3>My Designs.</h3>
      <p>A few dresses I designed and made in Lockdown...</p>
      <Carousel 
        className="carousel"
        responsive={responsive}
        autoPlaySpeed={3500}
        autoPlay={true}
        customTransition="all .5"
        transitionDuration={500}
        itemClass="carousel-item-padding-40-px"
        infinite={true}
        showDots={false}
        swipeable={false}
        draggable={true}
        keyBoardControl={true}
        containerClass="carousel-container"
        // centerMode={true}
        // focusOnSelect={true}
      >
        <div><img src={image1}/></div>
        <div><img src={image2}/></div>
        <div><img src={image3}/></div>
        <div><img src={image4}/></div>
        <div><img src={image5}/></div>
        <div><img src={image6}/></div>
        <div><img src={image7}/></div>
        <div><img src={image8}/></div>
        <div><img src={image9}/></div>
        <div><img src={image10}/></div>
        <div><img src={image11}/></div>
      </Carousel>
    </section>
  )
}

export default Interests

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   pauseOnHover: true,
// }

{/* <Slider {...settings}>
<section id="interests" className="interests">
  <h1>My Interests</h1>
  <p>My Designs</p>
  {/* <SimpleReactLightbox> */}
// <div data-slick='{"slidesToShow": 4, "slidesToScroll": 4}'>
//   <div>
//     <img src={image1}/>
//   </div>
//   <div>
//     <img src={image2}/>
//   </div>
//   <div>
//     <img src={image3}/>
//   </div>
//   <div>
//     <img src={image4}/>
//   </div>
//   <div>
//     <img src={image5}/>
//   </div>
//   <div>
//     <img src={image6}/>
//   </div>
//   <div>
//     <img src={image7}/>
//   </div>

//   <div>
//     <img src={image8}/>
//   </div>
//   <div>
//     <img src={image9}/>
//   </div>
//   <div>
//     <img src={image10}/>
//   </div>
//   <div>
//     <img src={image11}/>
//   </div>
// </div>
{/* </SimpleReactLightbox > */}
// </section>
// </Slider> */}