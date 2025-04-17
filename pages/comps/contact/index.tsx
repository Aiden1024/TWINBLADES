import React from 'react'
import { BsFillPersonLinesFill, BsWechat, BsFillEnvelopeFill, BsGithub } from "react-icons/bs";
import { Button } from '@heroui/button';

const contactLinks = [
  {
    id: 1,
    icon: BsWechat,
    href: '#', // 或者你的微信二维码图片链接
    label: 'WeChat'
  },
  {
    id: 2,
    icon: BsFillEnvelopeFill,
    href: 'mailto:your.email@example.com',
    label: 'Email'
  },
  {
    id: 3,
    icon: BsGithub,
    href: 'https://github.com/yourusername',
    label: 'GitHub'
  },
  {
    id: 4,
    icon: BsFillPersonLinesFill,
    href: '/resume', // 或者你的简历链接
    label: 'Resume'
  }
];

const Contact = () => {
  return (
    <div className=' flex flex-col w-full items-end my-8'>
        <div className='w-full  flex items-center justify-between md:justify-end gap-2  max-w-xs self-center md:self-end '>
          {contactLinks.map(({ id, icon: Icon, href, label }) => (
            <Button
              key={id}
              color='default'
              className='group w-12 h-12'
              variant='light'
              isIconOnly
              radius='full'
              aria-label={label}
            >
              <Icon className='text-3xl text-default-400 group-hover:text-foreground duration-200 ease-in-out'/>
            </Button>
          ))}
        </div>
        <p className=' text-default-400 text-sm'>2025 TWINBLADES DEVELOP</p>
    </div >
  )
}

export default Contact
