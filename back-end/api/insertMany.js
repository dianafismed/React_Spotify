// Vou usar esse arquivo para buscar os dados e inclui-los no banco de dados

import { artistArray } from "../../front-end/src/assets/database/artists.js";
import { songsArray } from "../../front-end/src/assets/database/songs.js";
import { db } from "./connect.js";

/* Tratando os dados antes de envia-los
  Eu já tinha um Id para cada artista, porém o bd já cria um id mais robusto. Então vou trocá-lo pelo do db
*/

const newArtistArray = artistArray.map((currArtistObj) => {
  const newArtistObj = { ...currArtistObj };
  delete newArtistObj.id;
  return newArtistObj;
});

const newSongsArray = songsArray.map((currSongObj) => {
  const newSongsObj = { ...currSongObj };
  delete newSongsObj.id;
  return newSongsObj;
});

const responseArtists = await db
  .collection("artists")
  .insertMany(newArtistArray);

const responseSongs = await db.collection("songs").insertMany(newSongsArray);

console.log(responseArtists);
console.log(responseSongs);
