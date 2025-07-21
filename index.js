import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config()

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
    res.render("index", {
        error: null
    })
});

app.post("/check", (req, res) => {
    if(req.body.password === process.env.PASSWORD){
        res.sendFile(`${__dirname}/public/secret.html`);
    }
    else{
        res.render("index", {
            error: "Senha incorreta! Tente novamente."
        });
    }
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});