import { Store } from "@/payload/type-gen"

function degToRad(degrees: number) {
  return degrees * (Math.PI / 180)
}

export function filterByDistanceLatLong(
  lat: number,
  long: number,
  distance: number,
  stores: Store[]
) {
  const filteredStores = stores.filter((store) => {
    const storeLat = parseFloat(store.lat)
    const storeLong = parseFloat(store.long)

    const radiusOfEarth = 6371 // Earth's radius in kilometers

    const dLat = degToRad(storeLat - lat)
    const dLong = degToRad(storeLong - long)

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(degToRad(lat)) *
        Math.cos(degToRad(storeLat)) *
        Math.sin(dLong / 2) *
        Math.sin(dLong / 2)

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

    const distanceBetweenPoints = radiusOfEarth * c

    return distanceBetweenPoints <= distance
  })

  return filteredStores
}
