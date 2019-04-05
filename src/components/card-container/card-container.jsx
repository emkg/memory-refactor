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
        const { faceUpCards } = this.state;
        // check isFaceUp, count num face up
        const numFaceUpCards = this.countNumFaceUpCards(faceUp);
        // check value
        let isMatch = false;
        if(numFaceUpCards > 1) {
             isMatch = this.determineIsMatch(faceUpCards, value);
        } else {
            faceUpCards.push(value);
        }

        this.setState({ faceUpCards, numFaceUpCards, isMatch })
    }

    countNumFaceUpCards = (faceUp) => {
        let countOfCardsFaceUp = this.state.numFaceUpCards;
        faceUp ? countOfCardsFaceUp++ : countOfCardsFaceUp--;
        return countOfCardsFaceUp;
    }

    determineIsMatch = (faceUpCards, value) => {
        const isMatch = faceUpCards.includes(value);
        return isMatch;
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