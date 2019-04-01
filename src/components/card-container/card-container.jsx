import React from "react";
import Card from "../card/card";
import CardBack from "../card/card-sides/card-back";
import CardFront from "../card/card-sides/card-front";
import "./card-container.css";

export default class CardContainer extends React.Component {
  

    render() {
        return (
           <div className="card-container">
                <CardBack />
                <CardFront />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
             
    
           </div>

        );
    }
}