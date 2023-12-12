import { createClient } from "contentful";

const clientCF = createClient({
    accessToken: process.env.NEXT_PUBLIC_CF_ACCESS_TOKEN,
    space: process.env.NEXT_PUBLIC_CF_SPACE,
    environment: process.env.NEXT_PUBLIC_CF_ENV,
});

export default clientCF;
