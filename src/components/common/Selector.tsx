"use client"

import React from "react"

import { ComparingProductCard } from "@/types/common/product"

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
}

export default function Selector({ choices }: SelectorProps) {
  return (
    <Select onValueChange={(value) => console.log(value)}>
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
