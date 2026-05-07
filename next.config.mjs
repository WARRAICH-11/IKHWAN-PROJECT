/** @type {import('next').NextConfig} */
const nextconfig = {
  output: 'export', // Adds static export
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextconfig;