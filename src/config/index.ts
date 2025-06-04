import dotenv from "dotenv";
import {z} from "zod";

dotenv.config();

const envSchema = z.object({
    PORT: z.coerce.number().default(3000),
    NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
    DB_TYPE: z.enum(["mysql", "postgres"]).default("mysql"),
    DB_HOST: z.string().default("localhost"),
    DB_PORT: z.coerce.number().default(3306),
    DB_NAME: z.string().default("test"),
    DB_USER: z.string().default("root"),
    DB_PASS: z.string().default(""),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
    console.error("Invalid environment variables:\n", parsed.error.format());
    process.exit(1);
}

export const env = parsed.data;

