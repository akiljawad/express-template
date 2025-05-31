import {EnvConfig} from '../types/env-config.type'
import dotenv from "dotenv";

dotenv.config();

const env: EnvConfig = {
    PORT: Number(process.env.PORT) || 3000,
    NODE_ENV: (process.env.NODE_ENV as EnvConfig['NODE_ENV']) || 'development',
};

export default env;

