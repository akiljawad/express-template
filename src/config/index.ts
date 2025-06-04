import dotenv from "dotenv";
import {z} from "zod";

dotenv.config();

const envSchema = z.object({
    PORT: z.coerce.number().default(3000),
    NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
    DB_TYPE: z.enum(["mysql", "postgres"]).default("mysql"),
    DB_MASTER_HOST: z.string().default("localhost"),
    DB_MASTER_PORT: z.coerce.number().default(3306),
    DB_MASTER_NAME: z.string().default("test"),
    DB_MASTER_USER: z.string().default("root"),
    DB_MASTER_PASS: z.string().default(""),
    DB_SLAVE_HOST: z.string().default("localhost"),
    DB_SLAVE_PORT: z.coerce.number().default(3306),
    DB_SLAVE_NAME: z.string().default("test"),
    DB_SLAVE_USER: z.string().default("root"),
    DB_SLAVE_PASS: z.string().default(""),
    CACHE_PREFIX: z.string().default("CACHE_PREFIX"),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
    console.error("Invalid environment variables:\n", parsed.error.format());
    process.exit(1);
}

export const env = parsed.data;

