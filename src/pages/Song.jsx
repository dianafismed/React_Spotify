import { Link, useParams } from "react-router-dom";
import Player from "../components/Player";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";

const Song = () => {
  const { id } = useParams();

  const { image, name, duration, artist, audio, index } = songsArray.filter(
    (currSongObj) => currSongObj.id === Number(id)
  )[0];

  const artistObj = artistArray.filter(
    (currArtistObj) => currArtistObj.id === artist
  )[0];

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt={`Imagem da música ${name}`} />
        </div>
      </div>

      <div className="song__bar">
        <Link to={`/artist/${artistObj.id}`} className="song__artist-image">
          <img
            src={artistObj.image}
            alt={`Imagem da música ${artistObj.name}`}
            width={75}
            height={75}
          />
        </Link>

        <Player />

        <div>
          <p className="song__name">Nome da musica</p>
          <p>Nome do Artista</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
