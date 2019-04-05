import React from 'react';
import CardContainer from "../card-container/card-container";
import styles from './game.module.css';

export default class Game extends React.Component {
    state = {
        ready: false,
        match: 0
    };


    // ready means the game is being played
    // not ready means the user is taking a peek
    handlePushReady = () => {
        this.setState({ ready : !this.state.ready });
    }

    handleMatch = () => {
        let { match } = this.state;
        match++;
        this.setState({ match });
    }

    render() {
    const { ready, match } = this.state;
        return (
        
            <React.Fragment>
                <button className="btn-primary" onClick={this.handlePushReady}>{ !ready ? "READY?" : "PEEK?" }</button>
                MATCHES: {match}
                <CardContainer onMatch={this.handleMatch} ready={ready} />
            </React.Fragment> 
        );
    }
};


