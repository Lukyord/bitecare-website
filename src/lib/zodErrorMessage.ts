import { ZodIssue } from "zod"

export function zodErrorMessage(errors: ZodIssue[]) {
  let errorMessage = ""

  errors.forEach((issue) => {
    errorMessage = errorMessage + issue.path[0] + ": " + issue.message + ". "
  })

  return errorMessage
}
