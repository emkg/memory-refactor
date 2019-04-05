import React from "react";
import PropTypes from "prop-types";
import CardFront from "./card-sides/card-front";
import CardBack from "./card-sides/card-back";

export class Card extends React.Component {
    state = {
        faceUp: true
    };

    componentDidMount() {
        this.setValue(this.props.value);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.ready !== this.props.ready) {
            const { ready } = this.props;

            this.setState({ faceUp : !ready});
        }
    }
    
    setValue = (value) => {
        this.setState({ value })
    }

    handleCardFlip = ( faceUp ) => {
        this.setState({ faceUp });
        const { value } = this.state;
            this.props.onCardFlip({ faceUp, value });
    }

    render() {
        const { value, faceUp } = this.state;
        return (
            faceUp ? (<CardFront color={value} onCardFlip={this.handleCardFlip} /> )
                : (<CardBack onCardFlip={this.handleCardFlip} /> ) 
        );
    }
};

Card.propTypes = {
    ready: PropTypes.bool.isRequired,
    onCardFlip: PropTypes.func.isRequired
};

export default Card;

