import React from "react";
import "./index.css";




function Topfooter(props) {
    return (
      <div className="sticky-top">
        <span>Clicky Game!!</span>
        {props.guessed ? (<span>You guessed: correctly!</span>) : (<span>You guessed: incorrectly!</span>)}
        <span>Score: {props.count}</span>
        <span>Top Score: {props.topScore}</span>
      </div>
    );
  }
  
  export default Topfooter;
  