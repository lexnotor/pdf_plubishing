import { NextRequest } from "next/server";
import { languages } from "./app/i18n/settings";

const locales = languages;
const defaultLocal = locales[0] ?? "en";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const pathnameHasLocale = locales.some(
        (locale) =>
            pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
    );

    if (pathnameHasLocale) return;

    request.nextUrl.pathname = `/${defaultLocal}${pathname}`;

    return Response.redirect(request.nextUrl);
}

export const config = { matcher: ["/((?!_next).*)"] };
