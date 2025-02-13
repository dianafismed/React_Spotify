import SongItem from "./SongItem";

const SongList = ({ songsArray }) => {
  const items = 5;

  return (
    <div className="song-list">
      {songsArray
        .filter((CurrValue, index) => index < items)
        .map((currSongObj, index) => (
          <SongItem {...currSongObj} index={index} key={index} />
        ))}
      <p className="song-list__see-more">Ver mais</p>
    </div>
  );
};

export default SongList;
