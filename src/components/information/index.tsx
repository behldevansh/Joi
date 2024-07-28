'use client'
import React, { useEffect } from 'react'
import { ModeToggle } from '../global/mode-toggle'
import {Search } from 'lucide-react'
import { Input } from '../ui/input'


type Props = {}

const InfoBar = (props: Props) => {


  return (
    <div className="flex flex-row justify-end gap-6 items-center px-4 py-4 w-full dark:bg-black ">
      <span className="flex items-center gap-2 font-bold">

      </span>
      <span className="flex items-center rounded-full bg-muted px-4">
        <Search />
        <Input
          placeholder="Quick Search"
          className="border-none bg-transparent"
        />
      </span>
      <ModeToggle />
    </div>
  )
}

export default InfoBar