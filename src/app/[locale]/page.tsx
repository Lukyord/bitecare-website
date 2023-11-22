import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"

export default function Home() {
  const tCommon = useTranslations("navbar")

  return (
    <main>
      <h1>bitecare</h1>
      <Button variant="destructive">button</Button>
    </main>
  )
}
