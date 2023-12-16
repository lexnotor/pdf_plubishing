import buildEmail from "@/functions/buildEmail";
import getOAuthLink from "@/functions/getOAuthLink";
import { getAccessToken, getRefreshToken } from "@/functions/getToken";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const url = new URL(req.url);
    const searchParams = url.searchParams;

    if (searchParams.get("auth_link")) {
        return NextResponse.json({ link: getOAuthLink() }, { status: 200 });
    } else if (searchParams.get("code")) {
        const code = searchParams.get("code")!;
        const token = await getRefreshToken(code);

        return NextResponse.json({ token });
    } else {
        return NextResponse.json({ error: "UNKNOW APPLICATION" });
    }
}

export async function POST(req: NextRequest) {
    // CHECK USER MESSAGE
    const { text, email, fname, lname } = await req
        .json()
        .then(({ text, lname, fname, email }) => {
            if (text.trim() == "") throw new Error();
            return { text, lname, fname, email };
        })
        .catch(() => ({}) as any);
    if (!text) {
        return NextResponse.json({ error: "EMPTY MESSAGE" }, { status: 404 });
    }

    // GET && CHECK ACCESS TOKEN
    const token = await getAccessToken();
    if (!token) {
        return NextResponse.json({ error: "TOKEN NEEDED" }, { status: 401 });
    }

    // SEND THE MAIL TO GORILLA FUND
    const url = "https://gmail.googleapis.com/gmail/v1/users/me/messages/send";
    const raw = (await buildEmail(text, { lname, email, fname })).asEncoded();
    const msg = await fetch(url, {
        method: "POST",
        headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ raw }),
    });

    return NextResponse.json({ msg });
}
