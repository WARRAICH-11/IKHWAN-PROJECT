/** @type {import('next').NextConfig} */
const nextconfig = {
  basePath: '/IKHWAN-PROJECT', // Set the base path for your project
  output: 'export', // Adds static export
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextconfig;