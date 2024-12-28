"use client"

import { useState, useEffect } from "react"
import { useField, SelectInput, useFormFields, useLocale } from "@payloadcms/ui"
import type { Location } from "../collections"

const SubdistrictPicker = ({
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
  const [allData, setAllData] = useState<any[]>([])
  const [options, setOptions] = useState<any[]>([])
  const provinceId = useFormFields(([fields]) => fields.province)
  const districtId = useFormFields(([fields]) => fields.district)
  const dispatch = useFormFields(([fields, dispatch]) => dispatch)
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  )

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/kongvut/thai-province-data/master/api_tambon.json"
        )
        const data = await response.json()
        setAllData(data)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    setValue("Select a value")
    dispatch({
      type: "UPDATE",
      path: "subdistrict",
      value: "Select a value",
    })
  }, [provinceId.value, districtId.value])

  useEffect(() => {
    const filteredData = allData.filter(
      (location: any) => location.amphure_id.toString() == districtId.value
    )

    const locationOptions = filteredData
      .map((location: any) => {
        return {
          label: locale.code == "th" ? location.name_th : location.name_en,
          value: location.id.toString(),
        }
      })
      .sort((a: any, b: any) => a.label.localeCompare(b.label))

    setOptions(locationOptions)

    if (value) {
      const selectedLocation = locationOptions.find(
        (option: any) => option.value === value
      )

      setSelectedLocation(selectedLocation?.value || null)
    }
  }, [allData, provinceId, value])

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
      label={label || "Subdistrict Select"}
      readOnly={options.length === 0}
      onChange={handleSelectionChange}
      required={required}
      description={admin?.description}
    />
  )
}

export default SubdistrictPicker
