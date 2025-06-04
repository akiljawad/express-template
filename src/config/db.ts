import 'reflect-metadata';
import {DataSource} from 'typeorm';
import {env} from "@config/index";
import {Users} from "@entities";

export const AppDataSource = new DataSource({
    type: env.DB_TYPE,
    replication: {
        master: {
            host: env?.DB_MASTER_HOST,
            port: env.DB_MASTER_PORT,
            username: env.DB_MASTER_USER,
            password: env.DB_MASTER_PASS,
            database: env.DB_MASTER_NAME,
        },
        slaves: [
            {
                host: env.DB_SLAVE_HOST,
                port: env.DB_SLAVE_PORT,
                username: env.DB_SLAVE_USER,
                password: env.DB_SLAVE_PASS,
                database: env.DB_SLAVE_NAME,
            }
        ]
    },
    synchronize: false,
    logging: false,
    migrations: [],
    entities: [Users],
    // entities: [__dirname + '/../entities/**/!(*.spec).entity.{ts,js}'],
});

export const userRepository = AppDataSource.getRepository(Users);