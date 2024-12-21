import sharp from "sharp"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import { mongooseAdapter } from "@payloadcms/db-mongodb"
import { buildConfig } from "payload"
import { Media } from "@/payload/collections/media"
import { Users } from "@/payload/collections/users"

export default buildConfig({
  editor: lexicalEditor(),
  collections: [Media, Users],
  secret: process.env.PAYLOAD_SECRET || "",
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),
  sharp,
})
