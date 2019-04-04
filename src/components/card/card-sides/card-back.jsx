import React from "react";
import PropTypes from "prop-types";
import styles from "../card.module.css";


export class CardBack extends React.Component {
    handleClick = () => {
        this.props.onCardFlip(true);
    }
    render() {
        return (
            <div className={`${styles.card} ${styles.cardBack}`} onClick={this.handleClick} />
        );  
    }
}

CardBack.propTypes = {
    onCardFlip: PropTypes.func.isRequired
}

export default CardBack;