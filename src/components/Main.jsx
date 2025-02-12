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
        <div className="single-item">
          <img className="single-item__image" src="" alt="" />
          <p>Nome do Artista</p>
          <p>Artista</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
