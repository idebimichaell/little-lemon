import React from 'react';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus laoreet finibus libero, sed sodales lacus fringilla vel. Sed ultricies vitae eros id consequat. Sed aliquam pharetra nulla faucibus congue. Maecenas tristique elementum massa, tristique porttitor magna accumsan vel. Aliquam ut turpis consequat, efficitur ex ac, finibus dolor. Proin venenatis turpis sit amet nulla eleifend lacinia. Pellentesque sagittis vestibulum tortor et feugiat.</p>
      </div>
      <div className="about-image">
        <img src="./about.jpg" alt="About Our Restaurant" />
      </div>
    </section>
  );
}

export default About;
