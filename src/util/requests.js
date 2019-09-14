import axios from 'axios';
import pk from './encode';

export const createToken = async () => {
  let config = {
    url: "https://accounts.spotify.com/api/token",
    method: 'post',
    headers: {
      "Authorization": `Basic ${pk.encode}`,
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    data: 'grant_type=client_credentials'
  };

  try {
    let { data } = await axios(config);
    return data;
  } catch (err) {
    throw err;
  };
};

export const fetchAlbums = async (currentPag) => {
  let { access_token } = await createToken();

  if (currentPag === "") currentPag = "https://api.spotify.com/v1/browse/new-releases?country=US&limit=8&offset=8"

  try {
    let albums = await axios({
      url: currentPag,
      headers: {
        "Authorization": `Bearer ${access_token}`,
        "Content-Type": "application/json"
      }
    });
    return albums;
  } catch (err) {
    throw err;
  };
};

export const fetchArtist = async (id) => {
  let { access_token } = await createToken();
  
  try {
    let artist = await axios({
      url: `https://api.spotify.com/v1/artists/${id}`,
      headers: {
        "Authorization": `Bearer ${access_token}`,
        "Content-Type": "application/json"
      }
    });

    return artist;
  } catch (err) {
    throw err;
  }; 
};

export const fetchAlbum = async (id) => {
  let { access_token } = await createToken();
  
  try {
    let album = await axios({
      url: `https://api.spotify.com/v1/albums/${id}`,
      headers: {
        "Authorization": `Bearer ${access_token}`,
        "Content-Type": "application/json"
      }
    });

    return album
  } catch (err) {
    throw err;
  }
};

export const fetchTopTracks = async (id) => {
  let { access_token } = await createToken();

    try {
      let tracks = await axios({
        url: `https://api.spotify.com/v1/artists/${id}/top-tracks?country=SE`,
        headers: {
          "Authorization": `Bearer ${access_token}`,
          "Content-Type": "application/json"
        }
      });

      return tracks;
    } catch (err) {
      throw err;
    }
};