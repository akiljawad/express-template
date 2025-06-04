import 'reflect-metadata';
import {DataSource} from 'typeorm';
import {env} from "@config/index";
import {Users} from "@entities";

export const AppDataSource = new DataSource({
    type: env.DB_TYPE,
    host: env.DB_HOST,
    port: env.DB_PORT,
    username: env.DB_USER,
    password: env.DB_PASS,
    database: env.DB_NAME,
    synchronize: false,
    migrations: [],
    entities: [Users],
});

export const userRepository = AppDataSource.getRepository(Users);