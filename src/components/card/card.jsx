import React from "react";
import CardFront from "./card-sides/card-front";
import CardBack from "./card-sides/card-back";
import styles from "./card.module.css";

export default class Card extends React.Component {
    state = {
        faceUp: true
    };

    componentDidMount() {
        this.getValue();
    }
    
    getValue = () => {
        this.setState( {value: "red"})
    }

    handleCardFlip = ( faceUp ) => {
        this.setState({ faceUp });
    }

    render() {
        const { value, faceUp } = this.state;
        
        return (
            faceUp ? (<CardFront color={value} onCardFlip={this.handleCardFlip} /> )
                : (<CardBack onCardFlip={this.handleCardFlip} /> ) 
        );
    }
}