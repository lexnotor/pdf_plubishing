import { NextRequest, NextResponse } from "next/server";

export async function POST(): Promise<NextResponse> {
    return NextResponse.json({ message: "Email send" });
}

export async function OPTIONS(req: NextRequest): Promise<NextResponse> {
    return NextResponse.json(null, {
        headers: {
            "Access-Control-Allow-Origin": new URL(req.url).host,
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
    });
}
