const lightenHexColor = (hex: string, amount: number = 10): string => {
  // Ensure the hex string starts with a '#'
  if (!hex.startsWith("#")) {
    throw new Error('Invalid hex color format. It should start with "#"')
  }

  // Remove the '#' and parse the hex string into RGB components
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  // Lighten each component by the specified amount
  const lighten = (color: number) => Math.min(255, Math.max(0, color + amount))

  const newR = lighten(r)
  const newG = lighten(g)
  const newB = lighten(b)

  // Convert the new RGB values back to a hex string
  const toHex = (color: number) => color.toString(16).padStart(2, "0")

  return `#${toHex(newR)}${toHex(newG)}${toHex(newB)}`
}

export const getDividerColor = (color: string): string =>
  lightenHexColor(color, 80)
