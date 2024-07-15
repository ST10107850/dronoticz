import React from "react";

function Subscribe() {
  return (
    <div className="App">
      <div className="subscribe">
        <p className="sub-p">SUBSCRIBE</p>
        <p>Sign up to our newsletter for the latest updates</p>
        <form className="subscribe-form">
          <input type="email" placeholder="Your Email" />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}
export default Subscribe;