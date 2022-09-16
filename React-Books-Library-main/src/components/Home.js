import React from "react";
import bookgif from "../components/book.gif";
import "../components/Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="card1">
        <img
          src={bookgif}
          alt="no pic"
          style={{ width: "94rem", height: "42rem" }}
        />
      </div>
      <div className="inner">
        <p className=" sub-title">
          “What really knocks me out is a book that, when you're all done
          reading it, you wish the author that wrote it was a terrific friend of
          yours and you could call him up on the phone whenever you felt like
          it. That doesn't happen much, though.” ― J.D. Salinger, The Catcher in
          the Rye.
         <p>  “Sometimes, you read a book and it fills you with this weird
          evangelical zeal, and you become convinced that the shattered world
          will never be put back together unless and until all living humans
          read the book.”
          ― John Green, The Fault in Our Stars</p>
        <p>
            Find your favourite book here, in your presonal library.
            Add your favourite book here just by adding new book,
            Books are our best friend they never leave us alone.
            so, let's read have fun enjoy!
        </p>
        </p>
        <h1 className="title">
          My Library
          <h1 className="title1">Books Collection</h1>
        </h1>
      </div>
    </div>
  );
};

export default Home;
