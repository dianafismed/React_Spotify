import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";

const Main = () => {
  return (
    <div className="main">
      <div className="item-list">
        <div className="item-list__header">
          <h2>Artistas populares</h2>
          <a href="/" className="item-list__link">
            Mostrar tudo
          </a>
        </div>

        <div className=".item-list__container">
          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img className="single-item__image" src="" alt="" />
              </div>

              <FontAwesomeIcon
                className="single-item__icon"
                icon={faCirclePlay}
              />
            </div>

            <div className="single-item__texts">
              <div className=".single-item__2lines">
                <p className="single-item__title">
                  Nome nomelllllllllllllllllllllllllllllllllllllllllllllll
                </p>
              </div>
              <p className="single-item__type">Artista</p>
            </div>
          </div>
        </div>
      </div>

      <div className="item-list">
        <div className="item-list__header">
          <h2>Músicas populares</h2>
          <a href="/" className="item-list__link">
            Mostrar tudo
          </a>
        </div>

        <div className=".item-list__container">
          <div className="single-item">
            <div className="single-item__div-image-button">
              <div className="single-item__div-image">
                <img className="single-item__image" src="" alt="" />
              </div>

              <FontAwesomeIcon
                className="single-item__icon"
                icon={faCirclePlay}
              />
            </div>

            <div className="single-item__texts">
              <div className=".single-item__2lines">
                <p className="single-item__title">
                  Nome nomelllllllllllllllllllllllllllllllllllllllllllllll
                </p>
              </div>
              <p className="single-item__type">Artista</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
