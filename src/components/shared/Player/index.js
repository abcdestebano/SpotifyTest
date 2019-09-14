import React from 'react';

/* STYLES */
import { PlayerContainer, PlayerButton, PlayerContent } from './styles';

const Player =  () => {

  return (
    <PlayerContainer>
      <PlayerContent>
        <h3>The Hype</h3>
        <p>Twenty One Pilots</p>
      </PlayerContent>
      <PlayerButton>&#9658;</PlayerButton>
    </PlayerContainer>
  );
};

export default Player;