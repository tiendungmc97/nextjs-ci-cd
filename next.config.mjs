import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            {
                source: '/en',
                destination: '/en/home',
                permanent: true,
            },
            {
                source: '/vi',
                destination: '/vi/home',
                permanent: true,
            },
        ];
    },
};

export default withNextIntl(nextConfig);
