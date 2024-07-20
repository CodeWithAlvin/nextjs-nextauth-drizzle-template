import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import dotenv from 'dotenv'

dotenv.config();


const sql = postgres(process.env.DATABASE_URL, { max: 1 });
const db = drizzle(sql);

(async () => {
    await migrate(db, { migrationsFolder: "./src/lib/db/migrations" });
    await sql.end();
})();