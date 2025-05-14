import React from 'react'
import PortCard from './PortCard'
import { TBTPCover, TBTPContent, TBTPdesc } from './projects/TBTemplate'
const Portfolio = () => {

  const projectLists = [


    { title: "TWINBLADES 快捷库", cover: <TBTPCover/>, tags: ["前端开发", "UI/UX设计"], desc: TBTPdesc, date: "2025.01 - Current" },
    { title: "Default Title", cover: null, tags: ["Default Tag"], desc: "Default Description", date: "0000.00.00 - 0000.00.00" },
    { title: "Default Title", cover: null, tags: ["Default Tag"], desc: "Default Description", date: "0000.00.00 - 0000.00.00" },
    { title: "Default Title", cover: null, tags: ["Default Tag"], desc: "Default Description", date: "0000.00.00 - 0000.00.00" },
    { title: "Default Title", cover: null, tags: ["Default Tag"], desc: "Default Description", date: "0000.00.00 - 0000.00.00" },
    { title: "Default Title", cover: null, tags: ["Default Tag"], desc: "Default Description", date: "0000.00.00 - 0000.00.00" },

  ]

  return (
    <div className=' py-16 px-4  flex flex-col' id='projects'>
      <h2 className='text-4xl pb-8 font-medium '>项目和作品</h2>
      <div className=' w-full grid gap-y-12 md:gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projectLists.map((item, index) => (
          <PortCard {...item} key={index}/>
        ))
        }


      </div>
    </div>
  )
}

export default Portfolio
