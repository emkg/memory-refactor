import React from "react";
import PropTypes from "prop-types";
import "../card.css";

export const CardFront = ({ color }) => {
    return (
        <div className="card">
            <div className="card-front" />
        </div>
    );
}

CardFront.propTypes = {
    color: PropTypes.string.isRequired
}

export default CardFront;