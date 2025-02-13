import { Link } from "react-router-dom";
import Player from "../components/Player";

const Song = () => {
  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src="" alt="Imagem da música" />
        </div>
      </div>

      <div className="song__bar">
        <Link to="/artist/1" className="song__artist-image">
          <img
            src="https://i.scdn.co/image/ab67616d00001e02af41105c5cd91b28f2cf219d"
            alt=""
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
