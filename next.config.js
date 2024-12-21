const withNextIntl = require("next-intl/plugin")("./src/i18n.ts")
const { withPayload } = require('@payloadcms/next/withPayload')


/** @type {import('next').NextConfig} */
const nextConfig = withPayload(withNextIntl({}))

module.exports = nextConfig
