/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/main/create-payment',
                permanent: true,
            }
        ]
    }
};

export default nextConfig;
