/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/, // applies to js/ts/jsx/tsx files
            use: ["@svgr/webpack"],
        });
        return config;
    },
};

export default nextConfig;
