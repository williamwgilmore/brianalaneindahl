import React from "react";
import { Footer } from "./Footer";

export const Papers = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br />
            <a href="https://ui.adsabs.harvard.edu/search/q=author%3A%22Indahl%2C%20Briana%22&sort=date%20desc%2C%20bibcode%20desc&p_=0">
              Papers
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
