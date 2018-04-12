import React from 'react';

const Playlist = (props) => {

  return (
    <iframe
    className={props.className}
    title="playlist"
    src="https://open.spotify.com/embed?uri=spotify:user:1214004202:playlist:5PlBPtgwkGIDuApLJonZR2&theme=white"
    width="100%"
    height="380"
    frameBorder="0"
    allow="encrypted-media"
    allowtransparency="true">
    </iframe>
  );
};

export default Playlist;