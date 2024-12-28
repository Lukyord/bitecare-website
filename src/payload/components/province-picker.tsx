"use client"

import { useState, useEffect } from "react"
import { useField, SelectInput, useLocale } from "@payloadcms/ui"

import type { Location } from "../collections"

import "./location-picker.css"

const ProvincePicker = ({
  field: { label, required = true, admin },
  path,
}: {
  field: {
    label: string
    required?: boolean
    admin?: {
      description?: string
      custom?: { type: string }
    }
  }
  path: string
}) => {
  const locale = useLocale()
  const { value, setValue } = useField<string>({ path })
  const [options, setOptions] = useState<any[]>([])
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  )

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province.json"
        )
        const data = await response.json()

        const locationOptions = data
          .map((location: any) => {
            return {
              label: locale.code == "th" ? location.name_th : location.name_en,
              value: location.id.toString(),
            }
          })
          .sort((a: any, b: any) => a.label.localeCompare(b.label))

        setOptions(locationOptions)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    if (value) {
      const selectedLocation = options.find(
        (option: any) => option.value === value
      )
      setSelectedLocation(selectedLocation?.value || null)
    }
  }, [value, options])

  const handleSelectionChange = (selectedOption: any) => {
    const selectedValue = selectedOption.value
    setValue(selectedValue)
    setSelectedLocation(selectedValue)
  }

  return (
    <SelectInput
      path={path}
      name={path}
      options={options}
      value={value}
      label={label || "Province Select"}
      readOnly={options.length === 0}
      onChange={handleSelectionChange}
      required={required}
      description={admin?.description}
    />
  )
}

export default ProvincePicker
