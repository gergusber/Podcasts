/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'is1-ssl.mzstatic.com',
      port: "",
      pathname: '/**',
    },
  ]
}

module.exports = nextConfig



// /** @type {import('next').NextConfig} */
// module.exports = {
//   // reactStrictMode: true,
//   images: {
//     // minimumCacheTTL: 31536000,
//     // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
//     // deviceSizes: [82, 110, 140, 192, 256, 384, 512, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
//     // formats: ['image/avif', '.png', 'image/webp'],
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'is1-ssl.mzstatic.com/',
//         port: "",
//         pathname: '/**',
//       },
//     ],
//   },
// }

