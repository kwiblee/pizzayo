import { Pool } from "pg";

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL
});

export async function query(query) {
    if (query == null) {
        throw new TypeError("query parameter must not be null or undefined");
    }

    try {
        const req = await pool.query(query);
        return req.rows
    } catch (error) {
        throw new Error(`Failed to execute query: ${error.message}`, { cause: error });
    }
}