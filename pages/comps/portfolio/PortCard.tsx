import React from 'react'
import { Card, CardBody, CardHeader, Chip, Image } from '@heroui/react'
const PortCard = () => {
    return (
        <div className=' relative group'>

            <div className="absolute inset-0 bg-default-500/10 border border-default-200 
                  transition-all duration-300 ease-out
                  translate-x-0 translate-y-0
                  group-hover:translate-x-2 group-hover:translate-y-2"
            />
            <div className="absolute inset-0 bg-primary-500/5 border border-default-100 
                  transition-all duration-300 ease-out delay-75
                  translate-x-0 translate-y-0
                  group-hover:translate-x-4 group-hover:translate-y-4"
            />


            <Card shadow='none' className='relative z-10 border border-default-200 
               transition-all duration-300 ease-out
               translate-x-0 translate-y-0
               hover:-translate-x-2 hover:-translate-y-2 '   isPressable>
                <CardHeader className=' p-0'>
                    <div className=' aspect-video w-full bg-default-100'>
                    </div>
                </CardHeader>
                <CardBody className='  duration-150 flex-col gap-4'>
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
        </div>
    )
}

export default PortCard
