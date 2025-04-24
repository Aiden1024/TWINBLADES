import React from 'react'
import PortCard from './PortCard'
import {Card, CardHeader, CardFooter, Image, Button} from "@heroui/react"
const Portfolio = () => {
  return (
    <div className=' py-16 px-4 w-full grid grid-cols-2 md:grid-cols-3 gap-8'>
        <PortCard/>
        <PortCard/>
        <PortCard/>
      
    </div>
  )
}

export default Portfolio
