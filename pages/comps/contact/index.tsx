import React from 'react'
import { BsFillPersonLinesFill, BsWechat, BsFillEnvelopeFill, BsGithub } from "react-icons/bs";
import { Button } from '@heroui/button';
import { Divider, Link, Tooltip } from '@heroui/react';
import { useRouter } from 'next/router';


const Contact = () => {
  const router = useRouter();
  const basePath = router.basePath;
  const contactLinks = [
    {
      id: 1,
      icon: BsFillEnvelopeFill,
      href: 'mailto:aiden1024@163.com',
      label: 'Email'
    },
    {
      id: 2,
      icon: BsWechat,
      href: `${basePath}/contact/weChat.png`,
      label: 'WeChat',
      download: false
    },

    {
      id: 3,
      icon: BsGithub,
      href: 'https://github.com/Aiden1024',
      label: 'GitHub'
    },
    {
      id: 4,
      icon: BsFillPersonLinesFill,
      href: `${basePath}/contact/TBresume.pdf`, // 或者你的简历链接
      label: 'Resume',
      download: true
    }
  ];
  return (
    <div id='contact' className=' flex flex-col w-full items-center my-16 px-4 itemc'>

      <div className='  flex items-center gap-2  max-w-xs '>
        {contactLinks.map(({ id, icon: Icon, href, label, download }) => (
          <Tooltip content={label}>
            <Button
              as={Link}
              href={href}
              isExternal={true}
              download={download}
              size='lg'
              key={id}
              color='default'
              variant='light'
              isIconOnly
              radius='full'
              aria-label={label}
            >
              <Icon className='text-2xl text-default-400 group-hover:text-foreground duration-200 ease-in-out' />
            </Button>
          </Tooltip>
        ))}
      </div>
      <p className=' text-default-400 tracking-wide'>2025 TWINBLADES DEVELOP</p>
    </div >
  )
}

export default Contact
