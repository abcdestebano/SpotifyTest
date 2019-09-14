import React, { useEffect, useState } from "react";

/* COMPONENTS */
import MainWrapper from "../shared/MainWrapper";
import RowSection from "../shared/RowSection";
import Card from "../shared/Card";

/* UTIL */
import { fetchAlbums } from '../../util/requests';


const LastRelease = () => {
  const [albumList, setAlbumList] = useState([]);
  const [currentPag, setCurrentPag] = useState('');

  // Fetch Last Releases
  useEffect(() => {
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    const { data } = await fetchAlbums(currentPag);
    setAlbumList([...albumList, ...data.albums.items]);
    setCurrentPag(data.albums.next);
  };

  const loadHandler = () => {
    fetchData();
  };

  return (
    <MainWrapper>
      <RowSection subtitle="Ultimos Lanzamientos">
        {
          albumList.map(({ images, id, name, artists }) => {
            return <Card src={images[0].url} key={id} name={name} artists={artists} albumId={id}/>;
          })
        }
        <button onClick={loadHandler}>cargar más</button>
      </RowSection>
    </MainWrapper>
  );
};

export default LastRelease;