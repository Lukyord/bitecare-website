import { Skeleton } from "@/components/ui/skeleton"

export default function MapLoadingSkeleton() {
  return (
    <Skeleton
      className="
                  flex h-[100vh] w-[100vw] 
                  flex-col gap-5 rounded-none 
                  bg-bc-surface-container p-4
                "
    >
      <div className="flex justify-between">
        <Skeleton className="h-[10vh] w-[40vw]" />
        <div className="flex gap-3">
          <Skeleton className="h-[10vh] w-[15vw]" />
          <Skeleton className="h-[10vh] w-[30vw]" />
        </div>
      </div>
      <Skeleton className="h-[60vh] w-[35vw]" />
      <Skeleton className="h-[15vh] w-[35vw]" />
    </Skeleton>
  )
}
