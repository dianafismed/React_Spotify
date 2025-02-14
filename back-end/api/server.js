import express from "express";
import { db } from "./connect.js";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Olá Mundo !");
});

// Busca os dados no Banco de Dados  --  é uma promisse, então preciso usar o await e async
app.get("/artists", async (req, res) => {
  res.send(await db.collection("artists").find({}).toArray());
});
app.get("/songs", async (req, res) => {
  res.send(await db.collection("songs").find({}).toArray());
});

// Seleciono a porta que será usada
app.listen(PORT, () => {
  console.log("Porta: " + PORT);
});
