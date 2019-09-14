import React, { useState, useEffect } from 'react';

/* GLOBAL STATE */
import useGlobal from '../../store';

/* COMPONENTS */
import Profile from '../shared/Profile';
import AlbumTable from '../shared/AlbumTable';
import MainWrapper from '../shared/MainWrapper';
import { object } from 'prop-types';

/* UTIL */
import { fetchArtist, fetchAlbum } from '../../util/requests';

const Artist = ({ match, location }) => {
  const [artist, setArtist] = useState({});
  const [album, setAlbum] = useState({});
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [globalState, globalActions] = useGlobal();

  // Fetch Artist Data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      let artist = await fetchArtist(match.params.id);
      setArtist(artist.data);
      globalActions.addArtistId(match.params.id);

      let album = await fetchAlbum(location.state.albumId);
      setAlbum(album.data);

      setLoading(false);
    };

    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <h2>Loading...</h2>
  }

  return (
    <MainWrapper>
      <Profile info={artist} />
      <AlbumTable info={album}/>
    </MainWrapper>
  );
};

Artist.propTypes = {
  match: object,
  location: object
};

export default Artist;