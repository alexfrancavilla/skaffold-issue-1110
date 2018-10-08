import express from "express";
import morgan from "morgan";

const app = express()

app.use(morgan('dev'));

app.get('/', (req, res) => res.send('Hello World!'))

const server = app.listen(8080);

export default server;
