"use client"

import { useState, useEffect } from "react"
import { useField, SelectInput, useFormFields } from "@payloadcms/ui"
import type { Location } from "../collections"

const LocationPicker = ({
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
  const [options, setOptions] = useState([])
  const provinceId = useFormFields(([fields, dispatch]) => fields.province)
  const districtId = useFormFields(([fields, dispatch]) => fields.district)
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  )

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const type = admin?.custom?.type || "province"
        const url = {
          province:
            "https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province.json",
          district:
            "https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_amphure.json",
          subdistrict:
            "https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_tambon.json",
        }[type]

        if (!url) {
          console.error("Invalid type")
          return
        }

        const response = await fetch(url)
        const data = await response.json()

        let filteredData = data

        if (type === "district" && provinceId.value) {
          filteredData = data.filter(
            (location: any) =>
              location.province_id.toString() == provinceId.value
          )
        } else if (type === "subdistrict" && districtId.value) {
          filteredData = data.filter(
            (location: any) =>
              location.amphure_id.toString() == districtId.value
          )
        }

        const locationOptions = filteredData
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

        if (value) {
          const selectedLocation = locationOptions.find(
            (option: any) => option.value.id === value
          )
          setSelectedLocation(selectedLocation.value || null)
        }
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchOptions()
  }, [provinceId, districtId, value])

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

export default LocationPicker
