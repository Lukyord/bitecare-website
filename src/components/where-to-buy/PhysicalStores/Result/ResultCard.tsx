import { PhysicalStore } from "@/types/where-to-buy/physical-store"

type ResultCardProps = {
  physicalStore: PhysicalStore
}

export default function ResultCard({ physicalStore }: ResultCardProps) {
  return <div>{physicalStore.name}</div>
}
