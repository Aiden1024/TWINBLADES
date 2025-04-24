import React from 'react'
import { Card, CardBody, CardHeader, Chip, Image  } from '@heroui/react'
const PortCard = () => {
  return (
    <Card shadow='none' className=' shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)] group border border-default-100 hover:border-primary-500 duration-200 ease-in-out transition-all  ' isPressable>
        <CardHeader className=' p-0'>
            <div className=' aspect-video w-full bg-default-100'>

            </div>
        </CardHeader>
        <CardBody className=' group-hover:bg-default-50 duration-150 flex-col gap-4'>
            <div className=' flex flex-col my-2 gap-1'>
                <h2 className=' group-hover:text-primary-500 duration-150  text-header text-lg'>TWINBLADES NEXT</h2>
                <div className='flex flex-wrap gap-2'>
                    <Chip size='sm' radius='none' variant='flat'>
                        前端开发
                    </Chip>
                    <Chip size='sm' radius='none' variant='flat'>
                        UI/UX 设计
                    </Chip>
                </div>
            </div>
            <p className=' text-base h-[72px] line-clamp-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates voluptas magni impedit! Ipsam labore et laboriosam sunt aliquam ad ipsum at quam, omnis illum. Adipisci aut ipsam cumque facere eius.</p>
        </CardBody>
    </Card>
  )
}

export default PortCard
