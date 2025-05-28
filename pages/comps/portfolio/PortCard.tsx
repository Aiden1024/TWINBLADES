import React from 'react'
import { Card, CardBody, CardHeader, Chip, Image, ScrollShadow } from '@heroui/react'
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@heroui/react";
import { RxCross1 } from 'react-icons/rx';
const PortCard = ({ title = "Default Title", cover = null, tags = ["Default Tag"], desc = "Default Description", date="0000.00.00 - 0000.00.00"},) => {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div className=' relative group'>
                        <div className="absolute inset-0 bg-default-500/15 border border-default-200 
                  transition-all duration-150 ease-out delay-75
                  translate-x-0 translate-y-0
                  group-hover:translate-x-3 group-hover:translate-y-3"
            />

            <div className="absolute inset-0 bg-default-500/10 border border-default-300 
                  transition-all duration-150 ease-out
                  translate-x-0 translate-y-0
                  group-hover:translate-x-1 group-hover:translate-y-1"
            />



            <Card shadow='none' className='relative z-10 border border-default-200 hover:border-default-400
               transition-all duration-150 ease-out
               translate-x-0 translate-y-0
               hover:-translate-x-1 hover:-translate-y-1 w-full '   isPressable onPress={onOpen}>
                <CardHeader className=' p-0 w-full border-b border-default-200 '>
                    <div className=' aspect-video w-full bg-default-100 '>
                        {cover}
                    </div>
                </CardHeader>
                <CardBody className='  duration-150 flex-col gap-4'>
                    <div className=' flex flex-col my-2 gap-1'>

                        <h2 className='  duration-300  text-header text-lg line-clamp-1'>{title}</h2>
                        <div className='flex flex-wrap gap-2'>
                            {tags && Array.isArray(tags) && tags.map((tag, index) => (
                                <Chip key={index} size='sm' radius='none' variant='flat'>
                                    {tag}
                                </Chip>
                            ))}
                        </div>

                    </div>
                    <p className=' text-base h-[72px] line-clamp-3 text-default-600'>{desc}</p>

                    <p className=' text-default-500 text-small'>{date}</p>
                </CardBody>
            </Card>


            <Modal
                closeButton={<Button color="default" isIconOnly size='sm' variant='light' className="group"><RxCross1 className="size-8 group-hover:rotate-90 duration-150 easeInOut" /></Button>}
                backdrop="opaque"
                isOpen={isOpen}
                motionProps={{
                    variants: {
                        enter: {
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.3,
                                ease: "easeOut",
                            },
                        },
                        exit: {
                            y: 20,
                            opacity: 0,
                            transition: {
                                duration: 0.2,
                                ease: "easeIn",
                            },
                        },
                    },
                }}
                onOpenChange={onOpenChange}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                            <ModalBody>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                                    risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                                    quam.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                                    risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                                    quam.
                                </p>
                                <p>
                                    Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
                                    adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
                                    officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                                    nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
                                    deserunt nostrud ad veniam.
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="default" variant="light" className="text-default-500" onPress={onClose}>
                                    Close
                                </Button>

                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )
}

export default PortCard
