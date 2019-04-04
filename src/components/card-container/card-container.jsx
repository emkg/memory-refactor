import React from "react";
import Card from "../card/card";
import styles from "./card-container.module.css";

export default class CardContainer extends React.Component {
    state = {};
    // TODO: store the state of matches
    // todo: control the number of cards that are faceUp at once

    render() {
        const { ready } = this.props;
        const cards = new Array(8).fill({});
        return (
           <div className={styles.cardContainer}>
                {cards.map(card => <Card ready={ready} />)}
           </div>

        );
    }
}