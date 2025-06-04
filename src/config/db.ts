import 'reflect-metadata';
import {DataSource} from 'typeorm';
import {env} from "@config/index";

export const AppDataSource = new DataSource({
    type: env.DB_TYPE,
    host: env.DB_HOST,
    port: env.DB_PORT,
    username: env.DB_USER,
    password: env.DB_PASS,
    database: env.DB_NAME,
    synchronize: false,
    migrations: [],
    entities: [],
});
