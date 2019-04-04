import React from "react";
import PropTypes from "prop-types";
import styles from "../card.module.css";

export class CardFront extends React.Component {
    
    handleClick = () => {
        this.props.onCardFlip(false);
    }
    render() {
        const { color } = this.props;
    
    return (
        <div className={styles.card} onClick={this.handleClick}>
            <div className={styles.cardFront} style={{backgroundColor: color}} />
        </div>
    );
    }
}

CardFront.propTypes = {
    color: PropTypes.string.isRequired,
    onCardFlip: PropTypes.func.isRequired
}

export default CardFront;