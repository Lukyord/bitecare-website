"use server"

import { z } from "zod"

import { redirect } from "@/lib/navigation"
import { postCodeSchema } from "@/types/where-to-buy/physical-store"

export async function filterByPostCode(
  state: { message: string },
  formData: FormData
) {
  const parse = postCodeSchema.safeParse({
    postCode: formData.get("post-code"),
  })

  if (!parse.success) {
    return { message: "Invalid Postal Code" }
  }

  const data = parse.data

  return { message: "Success" }
}
