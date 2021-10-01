import imageOfMe from '../assets/image_of_me.jpg'
function About() {
  return (
    <section id="about" className="about">
      {/* <h1 id="about">About.</h1> */}
      <p className="about-title">Hey, my name is Jess.</p>
      <p>
      I am an enthusiastic and ambitious junior full stack developer, with a background as a fashion designer. I have always been curious to learn new things, challenging and pushing myself. Throughout my school years Maths was my favourite subject, I really enjoyed the aspect of being faced with a problem and the excitement of resolving it. I rediscovered this interest whilst creating a website for a boutique shop, teaching myself HTML. Following this I began to explore more languages with freecodecamp and I absolutely loved it, which led me to enrolling on a full time Software Engineering Course. 
        <br/><br/>
      Making things and bringing creations to life is something I have always been passionate about. The magic behind building something from scratch to create a final product is really fulfilling for me. Coding has been a really exciting and logical progression for me to explore this but instead using a different medium, pixels. I thrive whilst working in a collaborative environment and I am looking forward to starting my career as a developer. 
      </p>
      <img src={imageOfMe} alt="image of me" className="image"/>
    </section>
  )
}

export default About