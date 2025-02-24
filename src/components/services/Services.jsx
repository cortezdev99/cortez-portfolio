import React from 'react';

import test from "../../images/graphics/wave-haikei.svg";

const Services = () => {
  return (
    <div className="services-wrapper">
      <div className="services-intro-wrapper">
        <div className="services-intro-background-wrapper">
          <img className="services-intro-background" src={test} />
        </div>

        <div className="services-intro-text-wrapper">
          <div className="services-intro-header">
            Where Ideas Transform Into Software
          </div>

          <div className="services-intro-text">
            We're dedicated to pushing the boundaries of technology and creating software solutions that make a difference.
          </div>

          <button className="services-intro-action-button">
            Schedule a Consultation
          </button>
        </div>

        <div className="services-intro-image-wrapper">
          <img className="services-intro-image" src="https://source.unsplash.com/random/350x350" />
        </div>
      </div>

      <div className="services-our-background-wrapper">
        <div className="services-our-background-image-wrapper">
          <img className="services-our-background-image"  src="https://source.unsplash.com/random/250x250" />
        </div>

        <div className="services-our-background-info-wrapper">
          <div className="services-our-background-info-header">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </div>

          <div className="services-our-background-info-subheader">
            Transforming Complexity into Simplicity
          </div>

          <div className="services-our-background-info-text">
            At PixelPulse technology meets innovation, and solutions are crafted to transform businesses. Since our inception, we've been driven by a singular mission: to empower organizations with tailor made software solutions that drive growth, effeciency, and success. Our company was born out of the desire to bridge the gap between cutting-edge technology and real-world challenges. With a shared vision, our team set out to revolutionize the software landscape by delivering solutions that not only meet but exceed expectations.
          </div>
        </div>
      </div>

      <div style={{ padding: "80px" }}>
        <div style={{ fontSize: "28px", color: "#000", fontWeight: "600" }}>
          Our Services
        </div>

        <div>
          <div>
            <img />
          </div>

          <div>
            <div>Software Analysis</div>

            <div>
              We provide software analysis and design in UML
            </div>

            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro non, corporis alias reiciendis nam unde similique vel sunt officia beatae ullam voluptas nostrum maiores accusantium, consequatur itaque modi? Minus, dolor.
                Velit unde corrupti nihil odit neque harum, ipsum ullam soluta nemo reprehenderit deleniti reiciendis tempora officiis cupiditate quas sunt et beatae veniam repudiandae facere saepe. Voluptatem vitae expedita numquam voluptas.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro non, corporis alias reiciendis nam unde similique vel sunt officia beatae ullam voluptas nostrum maiores accusantium, consequatur itaque modi? Minus, dolor.
                Velit unde corrupti nihil odit neque harum, ipsum ullam soluta nemo reprehenderit deleniti reiciendis tempora officiis cupiditate quas sunt et beatae veniam repudiandae facere saepe. Voluptatem vitae expedita numquam voluptas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
          <div>Software Development</div>

          <div>
            Custom software solutions tailored to your specific needs
          </div>

          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro non, corporis alias reiciendis nam unde similique vel sunt officia beatae ullam voluptas nostrum maiores accusantium, consequatur itaque modi? Minus, dolor.
              Velit unde corrupti nihil odit neque harum, ipsum ullam soluta nemo reprehenderit deleniti reiciendis tempora officiis cupiditate quas sunt et beatae veniam repudiandae facere saepe. Voluptatem vitae expedita numquam voluptas.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro non, corporis alias reiciendis nam unde similique vel sunt officia beatae ullam voluptas nostrum maiores accusantium, consequatur itaque modi? Minus, dolor.
              Velit unde corrupti nihil odit neque harum, ipsum ullam soluta nemo reprehenderit deleniti reiciendis tempora officiis cupiditate quas sunt et beatae veniam repudiandae facere saepe. Voluptatem vitae expedita numquam voluptas.
            </p>
          </div>
        </div>

        <div>
          <img />
        </div>
      </div>

      <div>
        <div>
          <div>Mobile App Development</div>

          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>

          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro non, corporis alias reiciendis nam unde similique vel sunt officia beatae ullam voluptas nostrum maiores accusantium, consequatur itaque modi? Minus, dolor.
              Velit unde corrupti nihil odit neque harum, ipsum ullam soluta nemo reprehenderit deleniti reiciendis tempora officiis cupiditate quas sunt et beatae veniam repudiandae facere saepe. Voluptatem vitae expedita numquam voluptas.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro non, corporis alias reiciendis nam unde similique vel sunt officia beatae ullam voluptas nostrum maiores accusantium, consequatur itaque modi? Minus, dolor.
              Velit unde corrupti nihil odit neque harum, ipsum ullam soluta nemo reprehenderit deleniti reiciendis tempora officiis cupiditate quas sunt et beatae veniam repudiandae facere saepe. Voluptatem vitae expedita numquam voluptas.
            </p>
          </div>
        </div>

        <div>
          <img />
        </div>
      </div>

      <div>
        <div>
          What are you waiting for? 
        </div>

        <div>
          Partner with us to unlock new possibilites, streamline processes, and elevate your digital presence
        </div>

        <div>
          action button
        </div>
      </div>
    </div>
  )
}

export default Services;