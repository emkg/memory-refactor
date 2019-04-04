import React from 'react';
import CardContainer from "../card-container/card-container";
import styles from './game.module.css';

export default class Game extends React.Component {
  state = {
    ready: false
  };

  // TODO: use ready to show/hide all
  // ready means the game is being played
  // not ready means the game is not being played yet

  // TODO: add points for matches

  render() {
    const { ready } = this.state;
    return (
        
        <React.Fragment>
          {!ready && (<button className="btn-primary">READY?</button>)}
          <CardContainer ready={ready} />
        </React.Fragment>
    

      
    );
  }
}


