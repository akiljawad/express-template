import express from 'express';
import helmet from "helmet";
import cors from "cors";
import bodyParser from "body-parser";
import {errorHandler} from "@middlewares";
import router from "@routes";
import {AppDataSource} from "@config/db";

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    console.log(req.body);
    res.send('Hello World!')
})

app.use('/api', router)

app.use(errorHandler)

AppDataSource.initialize().then(() => {
    console.log("DB Connected");
})

export default app;