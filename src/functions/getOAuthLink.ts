import dotenv from "dotenv";
import { OAuth2Client } from "google-auth-library";
dotenv.config();

const getOAuthLink = () => {
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

    return oauth2Client.generateAuthUrl({
        access_type: "offline",
        scope: "https://www.googleapis.com/auth/gmail.send",
        include_granted_scopes: true,
    });
};

export default getOAuthLink;
