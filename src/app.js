import express from "express";
import helmet from "helmet";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

export default app;