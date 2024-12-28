const withNextIntl = require("next-intl/plugin")("./src/i18n.ts")
const { withPayload } = require("@payloadcms/next/withPayload")

/** @type {import('next').NextConfig} */
const nextConfig = withPayload(
  withNextIntl({
    experimental: {
      reactCompiler: true,
    },
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          hostname: "storage.googleapis.com",
        },
      ],
    },
    redirects: async () => {
      return [
        {
          source: "/api/media/file/:path*",
          destination:
            "https://storage.googleapis.com/bitecare/payload-uploads/:path*",
          permanent: true,
        },
      ]
    },
  })
)

module.exports = nextConfig
