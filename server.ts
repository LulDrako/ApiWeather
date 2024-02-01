import  express, { Request, Response } from "express";

const app = express();
const API_KEY = "bfe09bf8bc884cecbf7155512240102";

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.get("/test", (req: Request, res: Response) => {
    res.send("Coucou, le serveur fonctionne :")
})

app.listen(PORT, () => {
  console.log(`Le serveur est en cours d'execution sur le port ${PORT}`)});