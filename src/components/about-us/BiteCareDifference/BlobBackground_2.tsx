import Image from "next/image"

import { Images } from "@/constant/Images"

export default function BlobBackground_2() {
  return (
    <Image
      alt="blob background 3"
      src={Images.Blob_3}
      className="
              absolute bottom-0 right-0 -z-10 
              translate-x-[50%] translate-y-[20%]
              xl:translate-x-[-70%] xl:translate-y-[70%] 
              xl:rotate-[-15deg]
            "
    />
  )
}
