import express from "express"
import routes from "./src/routes/index.js"

const app = express();
const port = 3000;

routes(app);

app.listen(port, () =>{
    console.log(`App rodando na porta ${port}`)
});