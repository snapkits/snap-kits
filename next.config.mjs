/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  images: {
    loader: 'custom',
    path: '/snap-kits',
    loaderFile: './src/custom-loader.js',
  },
  basePath: '/snap-kits',
};

export default nextConfig;
