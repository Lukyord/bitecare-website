"use client"

import { useState, useEffect } from "react"
import { useField, SelectInput } from "@payloadcms/ui"
import type { Location } from "../collections"

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
              label: location.name_th,
              value: {
                id: location.id.toString(),
                name_th: location.name_th,
                name_en: location.name_en,
              },
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
        (option: any) => option.value.id.toString() === value
      )
      setSelectedLocation(selectedLocation?.value || null)
    }
  }, [value, options])

  const handleSelectionChange = (selectedOption: any) => {
    const selectedValue = selectedOption.value
    setValue(selectedValue.id.toString())
    setSelectedLocation(selectedValue)
  }

  return (
    <div className="field-type">
      <label className="field-label">{label || "Location Select"}</label>
      <SelectInput
        path={path}
        name={path}
        options={options}
        value={value}
        onChange={handleSelectionChange}
        required={required}
      />
      {admin?.description && (
        <p className="field-description">{admin?.description}</p>
      )}
      {selectedLocation && (
        <div className="selected-location-info">
          <p>TH: {selectedLocation.name_th}</p>
          <p>EN: {selectedLocation.name_en}</p>
        </div>
      )}
    </div>
  )
}

export default ProvincePicker
