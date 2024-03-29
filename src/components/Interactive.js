import React from "react";
import interactiveImg from "../images/mobile/image-interactive.jpg";
import interactiveDesktopImg from "../images/desktop/image-interactive.jpg";

const Interactive = () => {
  return (
    <>
      <section className="interactive">
        <div className="interactiveImg">
          <picture>
            <source className="sourceImg"
              media="(min-width: 1024px)"
              srcSet={interactiveDesktopImg}
            />
            <img src={interactiveImg} alt="interactive VR" />
          </picture>
        </div>
        <div className="interactive-text">
          <h2> The leader in interactive VR</h2>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </section>
    </>
  );
};

export default Interactive;
