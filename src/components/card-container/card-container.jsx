import React from "react";
import PropTypes from "prop-types";
import Card from "../card/card";
import styles from "./card-container.module.css";

export class CardContainer extends React.Component {
    state = {
        numFaceUpCards: 0,
        isMatch: false,
        faceUpCards: []
    };

    componentWillUpdate(prevProps) {
        const { ready } = this.props;
        if(prevProps.ready !== ready){
            this.resetState();
        }
    }

    resetState = () => {
        this.setState({
            numFaceUpCards: 0,
            isMatch: false,
            faceUpCards: []
        })
    }

    // TODO: store the state of matches
    // todo: control the number of cards that are faceUp at once
    handleCardsFlip = ({ faceUp, value }) => {
        // check isFaceUp, count num face up
        this.countNumFaceUpCards(faceUp);
        // check value
        //this.determineIsMatch(value);
    }

    countNumFaceUpCards = (faceUp) => {
        let countOfCardsFaceUp = this.state.numFaceUpCards;
        faceUp ? countOfCardsFaceUp++ : countOfCardsFaceUp--;
        this.setState({ numFaceUpCards : countOfCardsFaceUp });
    }


    render() {
        const { ready } = this.props;
        const cards = new Array(8).fill({});
        return (
           <div className={styles.cardContainer}>
                {cards.map(card => <Card ready={ready} onCardFlip={this.handleCardsFlip} />)}
           </div>

        );
    }
};

CardContainer.propTypes = {
    ready: PropTypes.bool.isRequired
};

export default CardContainer;