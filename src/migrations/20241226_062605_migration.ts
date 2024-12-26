import { MigrateDownArgs, MigrateUpArgs } from "@payloadcms/db-mongodb"

export async function up({
  payload,
  req,
  session,
}: MigrateUpArgs): Promise<void> {
  await payload.update({
    collection: "product",
    where: {},
    data: {
      _status: "published",
    },
  })
}

export async function down({
  payload,
  req,
  session,
}: MigrateDownArgs): Promise<void> {
  // Migration code
}
