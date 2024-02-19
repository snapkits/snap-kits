/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  // images: { unoptimized: true },
  // experimental: { images: { unoptimized: true } },
  images: {
    loader: 'akamai',
    path: '/snap-kits',
  },
  // assetPrefix: '/./',
  basePath: '/snap-kits',
};

export default nextConfig;
