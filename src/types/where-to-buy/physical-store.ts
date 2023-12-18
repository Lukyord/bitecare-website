import { z } from "zod"

export const postCodeSchema = z.object({
  postCode: z
    .string()
    .length(5, { message: "Value must be a string of exactly 5 digits" })
    .refine((value) => /^[0-9]{5}$/.test(value), {
      message: "Value must only be numbers",
    }),
})

export type AreaDivisionChoice = {
  label: string
  value: string
}

export type SearchFilter = {
  province: string
  district: string
  subDistrict: string
  storeName: string
}
