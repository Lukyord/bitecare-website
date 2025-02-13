export const deployVercelHook = async () => {
  console.log("Triggering Vercel deployment hook")
  // if not production, do nothing
  if (process.env.NODE_ENV !== "production") return

  const vercelDeploymentHookUrl = process.env.VERCEL_DEPLOYMENT_HOOK_URL

  if (!vercelDeploymentHookUrl) {
    console.error("Vercel deployment hook url is not set")
    return
  }

  const response = await fetch(vercelDeploymentHookUrl, {
    method: "POST",
  })

  if (!response.ok) {
    console.error("Failed to trigger Vercel deployment hook")
  }

  console.log("Vercel deployment hook triggered")
}
