/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.alias.canvas = false;

        return config;
    },
    images: {
        remotePatterns: [
            {
                hostname: "images.ctfassets.net",
            },
        ],
    },
};

module.exports = nextConfig;
