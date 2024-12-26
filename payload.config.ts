import sharp from "sharp"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import { mongooseAdapter } from "@payloadcms/db-mongodb"
import { gcsStorage } from "@payloadcms/storage-gcs"
import { buildConfig, Locale } from "payload"
import type { Locale as DefinedLocale } from "@/config/i18n.config"
import { ProductTag, Media, Product, Users } from "@/payload/collections"
import { seoPlugin } from "@payloadcms/plugin-seo"
import { OverviewField } from "@payloadcms/plugin-seo/fields"
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
    seoPlugin({
      collections: ["product"],
      tabbedUI: true,
      uploadsCollection: "media",
      generateTitle: ({ doc }) => {
        if (doc?.["label"]) {
          return `BiteCare Product Offering – ${doc["label"]}`
        }
        return "Bitecare Product"
      },
      generateDescription: ({ doc }) =>
        doc?.["short_description"] ??
        "BiteCare is your trusted companion in pet well-being, offering expertly crafted dog treat tailored to meet the unique needs of every furry friend.",

      fields: ({ defaultFields }) => [
        ...defaultFields,
        OverviewField({
          imagePath: "meta.image",
        }),
      ],
    }),
  ],
  admin: {
    meta: {
      titleSuffix: " | Admin",
    },
    components: {
      graphics: {
        Icon: {
          path: "@/payload/components/icon",
        },
        Logo: {
          path: "@/payload/components/icon",
        },
      },
    },
  },
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
