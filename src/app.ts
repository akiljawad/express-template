import express, {Request, Response} from 'express';
import helmet from "helmet";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello from Express + TypeScript!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
