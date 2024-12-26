"use client"

import { useState, useEffect } from "react"
import { useField, SelectInput } from "@payloadcms/ui"

const ProvincePicker = ({
  field: { label, required = false },
  path,
}: {
  field: { label: string; required?: boolean }
  path: string
}) => {
  const { value, setValue } = useField<string>({ path })
  const [options, setOptions] = useState([])
  const [selectedProvince, setSelectedProvince] = useState<{
    id: number
    name_th: string
    name_en: string
  } | null>(null)

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_province_with_amphure_tambon.json"
        )
        const data = await response.json()

        const provinceOptions = data.map((province: any) => {
          return {
            label: province.name_th,
            value: {
              id: province.id,
              name_th: province.name_th,
              name_en: province.name_en,
            },
          }
        })

        setOptions(
          provinceOptions.sort((a: any, b: any) =>
            a.label.localeCompare(b.label)
          )
        )
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchOptions()
  }, [])

  const handleSelectionChange = (selectedOption: any) => {
    setValue(selectedOption.value)
    setSelectedProvince(selectedOption.value)
  }

  return (
    <div className="field-type select">
      <label className="field-label">Province Select</label>
      <SelectInput
        path={path}
        name={path}
        options={options}
        value={value}
        onChange={handleSelectionChange}
      />
      {selectedProvince && (
        <div className="selected-province-info">
          <p>
            <strong>Selected Province:</strong>
          </p>
          <p>Thai Name: {selectedProvince.name_th}</p>
          <p>English Name: {selectedProvince.name_en}</p>
        </div>
      )}
    </div>
  )
}

export default ProvincePicker
