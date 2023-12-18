"use client"

import PostCodeFilter from "./PostCodeFilter"
import FindMe from "./FindMe"
import DistanceFilter from "./DistanceFilter"

type PostCodeOrCurrentLocationFilterProps = {}

export default function PostCodeOrCurrentLocationFilter({}: PostCodeOrCurrentLocationFilterProps) {
  return (
    <div className="flex h-fit w-full items-center justify-between">
      <PostCodeFilter />

      {/* Find me & DistanceFilter */}
      <div className="flex items-center gap-6">
        <DistanceFilter />
        <FindMe />
      </div>
    </div>
  )
}
