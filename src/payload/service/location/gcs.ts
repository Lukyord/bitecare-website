export const getProvince = async (): Promise<any[] | null> => {
  try {
    const response = await fetch(
      "https://storage.googleapis.com/bitecare/locations/Thailand/provinces.json"
    )
    const data = await response.json()

    return data
  } catch (error) {
    console.error("Error fetching data:", error)
  }

  return null
}

export const getDistrict = async (
  provinceId: string
): Promise<any[] | null> => {
  try {
    const response = await fetch(
      `https://storage.googleapis.com/bitecare/locations/Thailand/provinces/province-${provinceId}.json`
    )
    const data = await response.json()

    return data
  } catch (error) {
    console.error("Error fetching data:", error)
  }

  return null
}

export const getSubdistrict = async (
  districtId: string
): Promise<any[] | null> => {
  try {
    const response = await fetch(
      `https://storage.googleapis.com/bitecare/locations/Thailand/districts/district-${districtId}.json`
    )
    const data = await response.json()

    return data
  } catch (error) {
    console.error("Error fetching data:", error)
  }

  return null
}
