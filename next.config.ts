import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js"
        }
      }
    }
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      // start region temporary
      {
        protocol: "https",
        hostname: "academy.ilwoo.org"
      },
      {
        protocol: "https",
        hostname: "img1.daumcdn.net"
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com"
      },
      // end region temporary
      {
        protocol: "http",
        hostname: "alpha-api.memez.party"
      },
      {
        protocol: "https",
        hostname: "alpha-api.memez.party"
      },
      {
        protocol: "https",
        hostname: "api.memez.party"
      },
      {
        protocol: "https",
        hostname: "memez.party"
      }
    ]
  }
}

export default nextConfig
