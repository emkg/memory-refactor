import React from "react";
import CardFront from "./card-sides/card-front";
import CardBack from "./card-sides/card-back";

export default class Card extends React.Component {
    state = {
        faceUp: true
    };

    componentDidMount() {
        this.getValue();
    }
    
    getValue = () => {
        // TODO: add random color value
        // TODO: control enough to ensure two of each
        this.setState( {value: "red"})
    }

    handleCardFlip = ( faceUp ) => {
        this.setState({ faceUp });
        // TODO: when card is flipped face up send value package to parent container
    }

    render() {
        const { value, faceUp } = this.state;
        
        return (
            faceUp ? (<CardFront color={value} onCardFlip={this.handleCardFlip} /> )
                : (<CardBack onCardFlip={this.handleCardFlip} /> ) 
        );
    }
}