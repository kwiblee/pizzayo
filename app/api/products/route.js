import { NextResponse } from 'next/server';
import { query } from '@/libs/postgres';

export async function GET() {
  try {
    const items = await query(`SELECT * FROM products`);

    if (!items) {
      return NextResponse.json({
        error: 'No items found'
      }, { status: 404 });
    }

    return NextResponse.json(items);
  } catch (err) {
    return NextResponse.json({
      error: 'Internal Server Error'
    }, { status: 500 });
  }
}
