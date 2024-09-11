import { NextResponse } from "next/server";
import { query } from '@/libs/postgres';

export async function POST(request) {
    if (!request || !request.json) {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    try {
        const { name, surname, email, hash } = await request.json();

        if (!name || !surname || !email || !hash) {
            return NextResponse.json({ error: "Missing field(s)" }, { status: 400 });
        }

        await query(`INSERT INTO users (name, surname, email, password) VALUES ('${name}', '${surname}', '${email}', '${hash}')`);

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}