import React from 'react';
import { Link } from 'react-router-dom';

const Playlist = (props) => {

  return (
    <iframe
    src="https://open.spotify.com/embed?uri=spotify:user:1214004202:playlist:5PlBPtgwkGIDuApLJonZR2&theme=white"
    width="100%"
    height="380"
    frameborder="0"
    allow="encrypted-media"
    allowtransparency="true">
    </iframe>
  );
};

export default Playlist;