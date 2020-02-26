import React from "react";
import { Footer } from "./Footer";

export const About = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br />
            <p>Doctoral Candidate at Univ of Texas at Austin</p>
            <a
              href={"./pdf/Resume.pdf"}
              className="btn btn-primary"
              target="blank"
              download
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
