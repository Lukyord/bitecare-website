import type { CollectionSlug, LabelFunction, StaticLabel } from "payload"

export function createRowLabel({
  defaultLabel,
  path,
  relationTo,
}: {
  defaultLabel: LabelFunction | StaticLabel
  path: string
  relationTo?: CollectionSlug
}) {
  return {
    path: "@/payload/components/row-label",
    clientProps: {
      defaultLabel: defaultLabel,
      path: path,
      relationTo: relationTo,
    },
  }
}
