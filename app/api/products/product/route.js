import { NextResponse } from 'next/server';
import { query } from '@/libs/postgres';

export async function GET(req) {
  try {
    const queryReq = req.nextUrl.searchParams.get('query');
    const item = await query(`SELECT * FROM products WHERE id = '${queryReq}'`);

    if (!item) {
      return NextResponse.json({
        error: 'No items found'
      }, { status: 404 });
    }

    return NextResponse.json(item);
  } catch (err) {
    return NextResponse.json({
      error: err
    }, {status: 500})
  }
}