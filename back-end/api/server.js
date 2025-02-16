import express from "express";
import cors from "cors"; // é um middleware
import { db } from "./connect.js";
import path from "path";

const __dirname = path.resolve();

const app = express();
const PORT = 3000;

app.use(cors());

// Requisições
app.get("/api/", (req, res) => {
  res.send("Olá Mundo !");
});

// Busca os dados no Banco de Dados  --  é uma promisse, então preciso usar o await e async
app.get("/api/artists", async (req, res) => {
  res.send(await db.collection("artists").find({}).toArray());
});
app.get("/api/songs", async (req, res) => {
  res.send(await db.collection("songs").find({}).toArray());
});

// Rota para não desenvolvedor
app.use(express.static(path.join(__dirname, "../front-end/dist")));
app.get("*", async (req, res) => {
  res.send(path.join(__dirname, "../front-end/dist/index.html"));
});

// Seleciono a porta que será usada
app.listen(PORT, () => {
  console.log("Porta: " + PORT);
});
