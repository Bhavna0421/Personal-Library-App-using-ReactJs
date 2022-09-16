import React from "react";
import "../components/About.css";
import bookgif from "../components/book.gif";

const About = () => {
  return (
    <div className="section2">
      <div className=" part part1">
        <h3>My presonal Library</h3>
        <p>
          {" "}
          Find your favourite book here, in your presonal library. Add your
          favourite book here just by adding new book, Books are our best friend
          they never leave us alone. so, let's read have fun enjoy!
        </p>
        <p>
          Books encourage us when we are defeated. They inspire us to work hard
          with hope and courage. They remove our ignorance and add to our
          knowledge. Books enrich our experience and sharpen our intellect. Thus
          a good book is our true friend. A man must avoid reading bad books
        </p>
      </div>
      <div className="part part2">
        <div className="img">
          <img src={bookgif} alt="no found" />
        </div>
      </div>
    </div>
  );
};

export default About;
