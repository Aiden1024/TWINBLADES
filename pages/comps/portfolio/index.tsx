import React from 'react'
import PortCard from './PortCard'
import {Card, CardHeader, CardFooter, Image, Button} from "@heroui/react"
import { SectionTitle } from '../exp'
import { PiDevices } from "react-icons/pi";
const Portfolio = () => {
  return (
    <div className=' py-16 px-4  flex flex-col'>
      <h2 className='text-4xl py-8 font-medium '>项目和作品</h2>
      <div className=' w-full grid grid-cols-2 md:grid-cols-3 gap-8'>
          <PortCard/>
          <PortCard/>
          <PortCard/>
          <PortCard/>
          <PortCard/>
          <PortCard/>

      
      </div>
    </div>
  )
}

export default Portfolio
