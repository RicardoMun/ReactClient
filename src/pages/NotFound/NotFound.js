import React from "react";
import "./NotFound.scss";
import BackGround from "../../../src/assets/img/jpg/BackGround.jpg";
export default function NotFound() {
  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="four_zero_four_bg">
              <img
                src={BackGround} alt=""
              ></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


/* import React from "react";

export default function NotFound() {
  return (
    <div>
      <h1>Page Not Found</h1>
    </div>
  );
}
 */