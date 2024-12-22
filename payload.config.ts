import sharp from "sharp"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import { mongooseAdapter } from "@payloadcms/db-mongodb"
import { buildConfig, Locale } from "payload"
import type { Locale as DefinedLocale } from "@/config/i18n.config"
import { Media } from "@/payload/collections/media"
import { Users } from "@/payload/collections/users"

export default buildConfig({
  editor: lexicalEditor(),
  collections: [Media, Users],
  secret: process.env.PAYLOAD_SECRET || "",
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || "",
  }),
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
