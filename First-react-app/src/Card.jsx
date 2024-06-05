import React from "react";
import Ppicture from "./assets/picture snap2.jpg"

function Card(){
  return (
    <div className = "Card">
        <img className="Card-image" src={Ppicture} alt="Sankale Pic" width="200px" />
        <h3 className="title">Sankale Joseph</h3>
        <p className="info">A skilled,talented and creative Web Developer.</p>
    </div>
  )
}

export default Card