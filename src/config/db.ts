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

// For synchronise existing model to this project - use below line
// npx typeorm-model-generator -h localhost -d your_db_name -u root -x password -e mysql -o ./src/models
