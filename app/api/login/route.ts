import { NextResponse } from 'next/server';

export async function GET() {
    const users = [
        { id: 1, name: 'Rajesh' },
        { id: 2, name: 'John' },
    ];
    return NextResponse.json(users);
}

export async function POST(req: Request) {
    const body = await req.json();
    return NextResponse.json({ message: 'User created', data: body }, { status: 201 });
}

export async function PUT(req: Request) {
    const body = await req.json();
    return NextResponse.json({ message: 'User updated', data: body });
}

export async function DELETE() {
    return NextResponse.json({ message: 'User deleted' });
}
