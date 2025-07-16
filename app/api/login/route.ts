import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { password } = await req.json();

  if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
    const res = NextResponse.json({ success: true });
    res.cookies.set('admin_auth', password, { httpOnly: true });
    return res;
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
