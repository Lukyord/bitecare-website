import { Locale } from "@/config/i18n.config"
import { getPayloadClient } from "@/lib/payload"

import { TransformCollectionWithSelect, TypedCollectionSelect } from "payload"

type Options<T extends TypedCollectionSelect["store"]> = {
  select?: T
  locale?: Locale
  depth?: number
  page?: number
  provinceId?: string
  districtId?: string
  postalCode?: string
  lat?: number
  lng?: number
}

export const getAllStores = async <T extends TypedCollectionSelect["store"]>(
  opts: Options<T> = {}
  // @ts-ignore: Too much type gymnastics
): Promise<TransformCollectionWithSelect<"store", T>[]> => {
  const payload = await getPayloadClient()
  const res = await payload.find({
    ...opts,
    collection: "store",
    pagination: false,
  })

  return res.docs
}

// By Location
export const getStoreByProvinceId = async <
  T extends TypedCollectionSelect["store"],
>(
  provinceId: string,
  opts: Options<T> = {}
  // @ts-ignore: Too much type gymnastics
): Promise<TransformCollectionWithSelect<"store", T>[]> => {
  const payload = await getPayloadClient()
  const res = await payload.find({
    ...opts,
    collection: "store",
    where: {
      province: {
        equals: provinceId,
      },
    },
    pagination: false,
  })

  return res.docs
}

export const getStoreByDistrictId = async <
  T extends TypedCollectionSelect["store"],
>(
  districtId: string,
  opts: Options<T> = {}
  // @ts-ignore: Too much type gymnastics
): Promise<TransformCollectionWithSelect<"store", T>[]> => {
  const payload = await getPayloadClient()
  const res = await payload.find({
    ...opts,
    collection: "store",
    where: {
      district: {
        equals: districtId,
      },
    },
    pagination: false,
  })

  return res.docs
}

export const getStoreByPostalCode = async <
  T extends TypedCollectionSelect["store"],
>(
  postalCode: string,
  opts: Options<T> = {}
  // @ts-ignore: Too much type gymnastics
): Promise<TransformCollectionWithSelect<"store", T>[]> => {
  const payload = await getPayloadClient()
  const res = await payload.find({
    ...opts,
    collection: "store",
    where: {
      postalCode: {
        equals: postalCode,
      },
    },
    pagination: false,
  })

  return res.docs
}

// By Lat Long
export const getStoreByLatLng = async <
  T extends TypedCollectionSelect["store"],
>(
  lat: number,
  lng: number,
  opts: Options<T> = {}
  // @ts-ignore: Too much type gymnastics
): Promise<TransformCollectionWithSelect<"store", T>[]> => {
  const payload = await getPayloadClient()
  const res = await payload.find({
    ...opts,
    collection: "store",
    where: {
      location: {
        near: {
          geometry: {
            coordinates: [lng, lat],
          },
          maxDistance: 1000000,
        },
      },
    },
    pagination: false,
  })

  return res.docs
}

// By Name
export const getStoreByName = async <T extends TypedCollectionSelect["store"]>(
  name: string,
  opts: Options<T> = {}
  // @ts-ignore: Too much type gymnastics
): Promise<TransformCollectionWithSelect<"store", T>[]> => {
  const payload = await getPayloadClient()
  const res = await payload.find({
    ...opts,
    collection: "store",
    where: {
      name: {
        equals: name,
      },
    },
    pagination: false,
  })

  return res.docs
}

export const getStoreByNameAndProvinceId = async <
  T extends TypedCollectionSelect["store"],
>(
  name: string,
  provinceId: string,
  opts: Options<T> = {}
  // @ts-ignore: Too much type gymnastics
): Promise<TransformCollectionWithSelect<"store", T>[]> => {
  const payload = await getPayloadClient()
  const res = await payload.find({
    ...opts,
    collection: "store",
    where: {
      name: {
        equals: name,
      },
      province: {
        equals: provinceId,
      },
    },
    pagination: false,
  })

  return res.docs
}

export const getStoreByNameAndDistrictId = async <
  T extends TypedCollectionSelect["store"],
>(
  name: string,
  districtId: string,
  opts: Options<T> = {}
  // @ts-ignore: Too much type gymnastics
): Promise<TransformCollectionWithSelect<"store", T>[]> => {
  const payload = await getPayloadClient()
  const res = await payload.find({
    ...opts,
    collection: "store",
    where: {
      name: {
        equals: name,
      },
      district: {
        equals: districtId,
      },
    },
    pagination: false,
  })

  return res.docs
}

export const getStoreByNameAndSubdistrictId = async <
  T extends TypedCollectionSelect["store"],
>(
  name: string,
  subdistrictId: string,
  opts: Options<T> = {}
  // @ts-ignore: Too much type gymnastics
): Promise<TransformCollectionWithSelect<"store", T>[]> => {
  const payload = await getPayloadClient()
  const res = await payload.find({
    ...opts,
    collection: "store",
    where: {
      name: {
        equals: name,
      },
      subdistrict: {
        equals: subdistrictId,
      },
    },
    pagination: false,
  })

  return res.docs
}
