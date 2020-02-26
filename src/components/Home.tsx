import React from "react";

export const Home = () => {
  return (
    <div className="homeBackground backgroundShift fullHeight fullWidth flexCenter">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
            <div id="header">
              <h1 id="headerName" className="text-center">
                Briana Indahl
              </h1>
              <hr id="headerDivider" />
              <h2 id="headerTitle" className="text-center">
                Doctor Of Astronomy
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
