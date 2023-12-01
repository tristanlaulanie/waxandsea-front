import React, { useRef, useEffect } from "react";
// CSS
import "./Slider.css";
// GLIDE
import Glide from "@glidejs/glide"; 
// CSS
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";

// 
// IMAGES
import tissus from "./images/tissus-wax.jpeg";
import mannequin from "./images/mannequin-bannière.png";
import cours from "./images/cours-de-couture.jpeg";
// 


function Slider() {

  const glideRef = useRef(null);

  useEffect(() => {

    // Créez une nouvelle instance de Glide avec la référence et les options
    const glide = new Glide(glideRef.current, {
    
    type: "carousel",
    startAt: 0,
    perView: 1,
    autoplay: 1200,
    hoverpause: true,
    animationDuration: 1000,
    gap: 8,
    });

    glide.mount();

    return () => glide.destroy();

  }, []);
    

    return (
      <section className="carousel section-carrousel">
      <div id="carousel-box" className="glide" ref={glideRef}>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide">
              <img
                className="carousel-img"
                src={mannequin}
                alt=""
              />
            </li>
            <li className="glide__slide">
              <img
                className="carousel-img"
                src={cours}
                alt=""
              />
            </li>
            <li className="glide__slide">
              <img
                className="carousel-img"
                src={tissus}
                alt=""
              />
            </li>
          </ul>
        </div>
        <div className="glide__arrows" data-glide-el="controls">
          <button id="side-arrow" className="glide__arrow glide__arrow--left" data-glide-dir="<">
          &lt; Prev
          </button>
          <button id="side-arrow" className="glide__arrow glide__arrow--right" data-glide-dir=">">
            Next &gt;
          </button>
        </div>
      </div>
      </section>
    );

  };

export default Slider;
