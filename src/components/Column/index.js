import React from "react";
import "./index.css";



function Column(props) {
  return <div className="col-sm" {...props}>
    <img src = {props.img} alt=""/>
  </div>
    

  
}

export default Column;
