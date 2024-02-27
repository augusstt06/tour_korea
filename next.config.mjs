/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    })

    return config
  },
  images: {
    domains: ['tong.visitkorea.or.kr'],
  },
}

export default nextConfig
