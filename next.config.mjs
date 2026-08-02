/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/projeto/farmacia-princesa',
        destination: '/farmacia-princesa',
        permanent: true,
      },
    ]
  },
};
export default nextConfig;
