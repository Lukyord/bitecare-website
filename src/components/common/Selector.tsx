"use client"

import React from "react"

import {
  BiteCareProductName,
  ComparingProductCard,
} from "@/types/common/product"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type SelectorProps = {
  choices: ComparingProductCard[]
  defaultValue: BiteCareProductName
}

export default function Selector({ choices, defaultValue }: SelectorProps) {
  return (
    <Select
      onValueChange={(value) => console.log(value)}
      defaultValue={defaultValue}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {choices.map((choice, index) => (
            <React.Fragment key={index}>
              <SelectItem value={choice.name}>{choice.name}</SelectItem>
            </React.Fragment>
          ))}
          {/* <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem> */}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
