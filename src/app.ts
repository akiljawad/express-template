import app from './index';
import env from './config'
import {Request, Response} from 'express';

const PORT = env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello from Express + TypeScript!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
