import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for navigation

function MainDescription() {
  return (
    <section id="main" className="main-description">
      <div>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus laoreet finibus libero, sed sodales lacus fringilla vel. Sed ultricies vitae eros id consequat. .</p>
        <Link to="/booking">
          <button className="booking-button">Reserve a Table</button>
        </Link>  {/* Link to the booking page */}
      </div>
      <div className='banner'>
        <img src="beefsteak.jpg" alt="Beef Steak" />
      </div>
    </section>
  );
}

export default MainDescription;
