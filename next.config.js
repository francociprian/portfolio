/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [ 
      'res.cloudinary.com',
      'source.unsplash.com'
    ],
    unoptimized: true,
  },
}

module.exports = nextConfig
