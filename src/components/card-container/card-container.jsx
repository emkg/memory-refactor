import React from "react";
import Card from "../card/card";
import CardBack from "../card/card-sides/card-back";
import CardFront from "../card/card-sides/card-front";
import styles from "./card-container.module.css";

export default class CardContainer extends React.Component {
    state = {};

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