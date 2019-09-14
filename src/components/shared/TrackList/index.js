import React from 'react';
import { object } from 'prop-types';

/* STYLES */
import { TrackListContainer, TrackListContent } from './styles';

const TrackList = ({ tracks }) => {
  if (!tracks) return <p>Loading...</p>;
  return (
    <TrackListContainer >
        {
          tracks.tracks.map((track, index) => {
            return (
              <TrackListContent key={index}>
                <p>{track.name}</p>
                <p>{track.popularity}</p>
              </TrackListContent>
            )
          })
        }
    </TrackListContainer>
  );
};

TrackList.propTypes = {
  tracks: object
};

export default TrackList;