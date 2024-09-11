import { NextResponse } from 'next/server';
import { query } from '@/libs/postgres';

export async function GET(req) {
  try {
    const queryReq = req.nextUrl.searchParams.get('query') || '';
    const item = await query(`SELECT * FROM users WHERE email = '${queryReq}'`);

    return NextResponse.json(item);
  } catch (err) {
    return NextResponse.json({
      error: err
    }, {status: 500})
  }
}
