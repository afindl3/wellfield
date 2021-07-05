import './TileAnimations.css';
import applicationsTile from '../../../images/tiles/applications.png';
import blockchainTile from '../../../images/tiles/blockchain.png';
import protocolsTile from '../../../images/tiles/protocols.png';

import { useEffect, useState } from 'react';

function TileAnimations() {
  const [loadTiles, setLoadTiles] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadTiles(true)
    }, 800)
  }, []);

  if (!loadTiles) {
    return null;
  }

  return (
    <>
      <img src={blockchainTile} className="home__tile home__blockchain-tile" alt="Blockchain tile" />
      <img src={protocolsTile} className="home__tile home__protocols-tile" alt="Protocols tile" />
      <img src={applicationsTile} className="home__tile home__applications-tile" alt="Applications tile" />
    </>
  );
}

export default TileAnimations;