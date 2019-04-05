import React from "react";
import PropTypes from "prop-types";
import { randomColor } from "randomcolor";
import Card from "../card/card";
import styles from "./card-container.module.css";

export class CardContainer extends React.Component {
    state = {
        numFaceUpCards: 0,
        isMatch: false,
        faceUpCards: []
    };

    componentWillMount() {
        this.makeCards();
    }

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

    // todo: control the number of cards that are faceUp at once
    handleCardsFlip = ({ faceUp, value }) => {
        const { faceUpCards } = this.state;
        const numFaceUpCards = this.countNumFaceUpCards(faceUp);
        let isMatch = false;
        
        if(numFaceUpCards > 1) {
             isMatch = this.determineIsMatch(faceUpCards, value);
             if (isMatch) {
                 this.props.onMatch();
             }
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

    makeCards = () => {
        const halfCards = randomColor({ count: 4, hue: "random"});
        const halfCardsCopy = halfCards.slice(0);
        const cards = halfCards.concat(halfCardsCopy);
        this.setState({ cards });
        return cards;
    }


    render() {
        const { ready } = this.props;
        const { cards } = this.state;
        return (
           <div className={styles.cardContainer}>
                {cards.map(card => <Card ready={ready} value={card} onCardFlip={this.handleCardsFlip} />)}
           </div>

        );
    }
};

CardContainer.propTypes = {
    ready: PropTypes.bool.isRequired,
    onCardFlip: PropTypes.func.isRequired
};

export default CardContainer;