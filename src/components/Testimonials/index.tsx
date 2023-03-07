import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./styles.css";

export function Testimonials() {

  return (
    <div className="testimonials-container" id="testimonials">
      <h2>O que meus clientes dizem</h2>
      <Slide>
        <div className="each-slide-effect">
          <div className="content">
            <span className="testimonial">
              “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis vulputate at ornare phasellus tincidunt id diam nulla quis. Sed mauris urna sodales velit elit at maecenas. Fringilla pharetra venenatis sed sit mauris. Non proin nulla et sapien, enim facilisi sem. Porttitor ornare sit mattis morbi et risus. ”
            </span>
            <div>
              <p className="user-name">Armando Pereira</p>
              <p className="user-office">CEO, Fox Software</p>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
}
