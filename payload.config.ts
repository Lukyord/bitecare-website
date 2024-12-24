import sharp from "sharp"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import { mongooseAdapter } from "@payloadcms/db-mongodb"
import { gcsStorage } from "@payloadcms/storage-gcs"
import { buildConfig, Locale } from "payload"
import type { Locale as DefinedLocale } from "@/config/i18n.config"
import { ProductTag, Media, Product, Users } from "@/payload/collections"
import path from "path"
import {
  AboutUsConfig,
  CommonConfig,
  HomeConfig,
} from "@/payload/global-configs"

export default buildConfig({
  editor: lexicalEditor(),
  collections: [Media, Users, Product, ProductTag],
  secret: process.env.PAYLOAD_SECRET || "",
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || "",
  }),
  globals: [HomeConfig, CommonConfig, AboutUsConfig],
  plugins: [
    gcsStorage({
      collections: {
        media: true,
      },
      bucket: process.env.GCS_BUCKET || "",
      options: {
        apiEndpoint: process.env.GCS_ENDPOINT,
        projectId: process.env.GCS_PROJECT_ID,
        credentials: {
          project_id: "bitecare",
          private_key_id: process.env.GCS_PRIVATE_KEY_ID,
          private_key: process.env.GCS_PRIVATE_KEY,
          client_email: process.env.GCS_CLIENT_EMAIL,
          client_id: "113383120774366486361",
        },
      },
    }),
  ],
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "./src/payload/schema.graphql"),
    disablePlaygroundInProduction: true,
  },
  typescript: {
    outputFile: path.resolve(__dirname, "./src/payload/type-gen.ts"),
  },
  localization: {
    locales: [
      {
        code: "en",
        label: "English",
      },
      {
        code: "th",
        label: "Thai",
      },
    ] as (Locale & {
      code: DefinedLocale
    })[],
    defaultLocale: "en",
  },
  sharp,
})
