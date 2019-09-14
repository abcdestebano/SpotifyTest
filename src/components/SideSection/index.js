import React, { useEffect, useState } from 'react';

/* COMPONENTS */
import Player from '../shared/Player';
import TrackList from '../shared/TrackList';
import Image from '../shared/Image';

/* GLOBAL STATE */
import useGlobal from '../../store';

/* UTIL */
import { fetchTopTracks } from '../../util/requests';

// STYLES
import { SideSectionContainer, SideSectionContent } from './styles';

const SideSection = () => {
  // eslint-disable-next-line no-unused-vars
  const [globalState, globalActions] = useGlobal();
  const [tracks, setTracks] = useState();

  useEffect(() => {
    const fetchData = async () => {
      if (globalState.artistId === '') return false;
      let { data } = await fetchTopTracks(globalState.artistId);
      setTracks(data);
    };

    fetchData();
  }, [globalState.artistId])

  if (globalState.artistId === '') {
    return (
      <SideSectionContainer>
        <SideSectionContent>
          <Image src="https://assets-ouch.icons8.com/preview/841/f758d4e3-9fb9-4bff-a1a2-016a4e51f2e2.png" width="250px" height="250px"/>
          <p>Da click en un artista para poder ver las canciones top que tiene</p>
        </SideSectionContent>
        <Player />
      </SideSectionContainer>
    );
  } 
  
  return (
    <SideSectionContainer>
      <TrackList tracks={tracks}/>
      <Player />
    </SideSectionContainer>
  );
}

export default SideSection;