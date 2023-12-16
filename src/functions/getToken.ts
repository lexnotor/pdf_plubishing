import dotenv from "dotenv";
import { OAuth2Client } from "google-auth-library";

dotenv.config();

const getRefreshToken = async (code: string) => {
    const clientId = process.env.CLIENT_ID,
        clientSecret = process.env.CLIENT_SECRET,
        redirectUri = process.env.REDIRECT_URI,
        projectId = process.env.PROJECT_ID;

    const oauth2Client = new OAuth2Client({
        clientId,
        clientSecret,
        projectId,
        redirectUri,
    });

    const { tokens } = await oauth2Client.getToken(code);

    if (!tokens) return null;

    return tokens.access_token;
};

const getAccessToken = async () => {
    const clientId = process.env.CLIENT_ID,
        clientSecret = process.env.CLIENT_SECRET,
        projectId = process.env.PROJECT_ID,
        redirectUri = process.env.REDIRECT_URI,
        refreshToken = process.env.REFRESH_TOKEN;

    const oauth2Client = new OAuth2Client({
        clientId,
        clientSecret,
        projectId,
        redirectUri,
        credentials: {
            refresh_token: refreshToken,
            scope: "https://www.googleapis.com/auth/gmail.send",
        },
    });

    const cred = await oauth2Client.getAccessToken();
    return cred.token;
};

export { getRefreshToken, getAccessToken };
