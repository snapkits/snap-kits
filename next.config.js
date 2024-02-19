/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: false, 
  output: 'export',
  images: {
    loader: 'custom',
    path: '/snap-kits',
    loaderFile: './src/custom-loader.js',
  },
  basePath: '/snap-kits',
};

module.exports = nextConfig;
