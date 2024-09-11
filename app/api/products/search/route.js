import { NextResponse } from 'next/server';
import { query } from '@/libs/postgres';

export async function GET(req) {
  const queryReq = req.nextUrl.searchParams.get('query')
  
  if (!query) {
    return NextResponse.json({
      error: 'No query provided'
    }, {status: 400})
  }
  
  try {
    const items = await query(`SELECT * FROM products WHERE name LIKE '%${queryReq}%' LIMIT 5`);

    return NextResponse.json(items)
  } catch (err) {
    return NextResponse.json({
      error: 'Internal Server Error'
    }, {status: 500})
  }
}
