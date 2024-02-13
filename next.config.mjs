/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
  output: "export",
  images: {
    loader: 'default',
    path: '',
  },
  assetPrefix: '/./',
};

export default nextConfig;