import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://missernightangel:Poison8267*@cluster0.jgwks.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyProject");
