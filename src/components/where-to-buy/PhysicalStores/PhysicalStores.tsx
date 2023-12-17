import dynamic from "next/dynamic"

const DynamicMap = dynamic(
  () => import("@/components/where-to-buy/PhysicalStores/Map"),
  {
    ssr: false,
  }
)

type PhysicalStoresProps = {}

export default function PhysicalStores({}: PhysicalStoresProps) {
  return (
    <div>
      <DynamicMap />
    </div>
  )
}
