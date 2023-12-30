import Image from "next/image"

import { Images } from "@/constant/Images"

export default function BlobBackground_1() {
  return (
    <>
      <Image
        alt="blob background 1"
        src={Images.Blob_1}
        className="
                absolute left-0 top-0 -z-10 
                translate-x-[-50%] translate-y-[-30%]
                rotate-[177deg] 
              "
      />
      <Image
        alt="blob background 2"
        src={Images.Blob_2}
        className="
                absolute right-0 top-0 -z-10 
                translate-x-[50%] translate-y-[-50%] rotate-[-147deg]
                xl:translate-x-[50%] xl:translate-y-[-50%] xl:rotate-0
              "
      />
    </>
  )
}
