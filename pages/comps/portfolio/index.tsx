import React from 'react'
import PortCard from './PortCard'
import { TBTPCover, TBTPdesc } from './projects/TBTemplate'
import { RPCover, RPContent, RPdesc } from './projects/HKITCRP'
import { SLPv4Cover, SLPv4Content, SLPv4desc } from './projects/SLPv4'
import { MVSECover, MVSEContent, MVSEdesc } from './projects/MVSE'
import { SPWZCover, SPWZContent, SPWZdesc } from './projects/SPWZ'
import { AIBoxCover, AIBoxContent, AIBoxdesc } from './projects/AIBox'

import TBTPContent from './contents/TBTP/TBTPContent'
import { ScrollShadow } from '@heroui/react'

const Portfolio = () => {

  const projectLists = [
    {
      title: "TWINBLADES 工具箱",
      cover: <TBTPCover />,
      tags: ["前端开发", "UI/UX设计"],
      desc: TBTPdesc,
      date: "2025.01 - Current",
      content: <TBTPContent />,  // Added content component
      infoJSON: {
        Git: "https://github.com/Aiden1024/TWINBLADES/",
        Link: "https://aiden1024.github.io/TWINBLADES"
      }
    },
    {
      title: "香港ITC研究人才",
      cover: <RPCover />,
      tags: ["2024高才", "HKSTP人才"],
      desc: RPdesc,
      date: "0000.00.00 - 0000.00.00",
      content: <RPContent />,  // Added content component
      infoJSON: {
        Link: "https://www.itf.gov.hk/en/funding-programmes/nurturing-talent/research-talent-hub/research-talent-hub-for-spc-projects-rth-spc-/index.html"
      }
    },
    {
      title: "AI自学习平台 v4",
      cover: <SLPv4Cover />,
      tags: ["前端开发", "UI/UX设计", "产品设计"],
      desc: SLPv4desc,
      date: "0000.00.00 - 0000.00.00",
      content: <SLPv4Content />  // Added content component
    },
    {
      title: "AI Box v2",
      cover: <AIBoxCover />,
      tags: ["前端开发", "UX设计"],
      desc: AIBoxdesc,
      date: "0000.00.00 - 0000.00.00",
      content: <AIBoxContent />  // Added content component
    },
    {
      title: "多模态视频搜索引擎",
      cover: <MVSECover />,
      tags: ["前端开发", "UI/UX设计"],
      desc: MVSEdesc,
      date: "0000.00.00 - 0000.00.00",
      content: <MVSEContent />  // Added content component
    },
    {
      title: "Speech Wizard",
      cover: <SPWZCover />,
      tags: ["前端开发"],
      desc: SPWZdesc,
      date: "0000.00.00 - 0000.00.00",
      content: <SPWZContent />  // Added content component
    }
  ];


  return (
    <div className=' py-16   flex flex-col md:-mx-6  ' id='projects'>
      <h2 className='text-4xl pb-4 px-4 md:pb-8 font-medium md:px-10'>项目与作品</h2>
      {/* <div className=' w-full grid gap-y-12 md:gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8'>
        {projectLists.map((item, index) => (
          <PortCard {...item} key={index}/>
        ))
        }


      </div> */}
      <ScrollShadow isEnabled={false} orientation="horizontal" className='md:px-10  flex flex-row lg:grid lg:grid-cols-3 items-center overflow-x-scroll scrollbar-hide p-4 gap-4 lg:gap-6 xl:gap-8 '>
        {projectLists.map((item, index) => (
          <div className=' w-[85%] md:w-[60%] lg:w-full  flex-shrink-0'>
            <PortCard {...item} key={index} />
          </div>
        ))
        }


      </ScrollShadow>
    </div>
  )
}

export default Portfolio
