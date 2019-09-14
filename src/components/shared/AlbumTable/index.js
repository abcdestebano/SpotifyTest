import React from 'react';
import { object } from 'prop-types';

/* COMPONENTS */
import Image from '../Image';

/* STYLES */
import { TableContainer, TableHeader, TableTitle, TableRow } from './styles';

const AlbumTable = ({ info }) => {
  return (
    <TableContainer>
      <TableHeader>
        <TableTitle>Foto</TableTitle>
        <TableTitle>Album</TableTitle>
        <TableTitle>Cancion</TableTitle>
      </TableHeader>
      <div>
        {
          info.tracks.items.map((item, index) => {
            return (
              <TableRow key={index}>
                <Image src={info.images[0].url} width="50px" height="50px"/>
                <p>{info.name}</p>
                <p>{item.name}</p>
              </TableRow>
            )
          })
        }
      </div>
      
    </TableContainer>
  );
};

AlbumTable.propTypes = {
  info: object
};

export default AlbumTable;