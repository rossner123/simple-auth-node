import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config()

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
});

app.post("/check", (req, res) => {
    if(req.body.password === process.env.PASSWORD){
        res.sendFile(`${__dirname}/public/secret.html`);
    }
    else{
        res.sendFile(`${__dirname}/public/index.html`);
    }
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});