import React from "react";

function Specials() {
  return (
    <div id="specials" className="specials-background">
      <section className="specials">
        <div className="special-title">Specials</div>
        <div className="specials-container">
          <div className="special-item">
            <img src="cp.jpg" alt="Chicken Parmigiana" />
            <div className="item">
              <h3>Greek Salad</h3>
              <p className="price">$32.99</p>
            </div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus laoreet finibus libero, sed sodales lacus fringilla vel.
            </p>
            <a href="#">Order now</a>
          </div>

          <div className="special-item">
            <img src="beefsteak.jpg" alt="Beef Steak" />
            <div className="item">
              <h3>Brochetta</h3>
              <p className="price">$24.99</p>
            </div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus laoreet finibus libero, sed sodales lacus fringilla vel.
            </p>
            <a href="#">Order now</a>
          </div>
          <div className="special-item">
            <img src="vbb.jpg" alt="Vegan Buddha Bowl" />
            <div className="item">
              <h3>Lemon Dessert</h3>
              <p className="price">$17.99</p>
            </div>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus laoreet finibus libero, sed sodales lacus fringilla vel.
            </p>
            <a href="#">Order now</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Specials;
