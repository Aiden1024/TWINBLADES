import React from 'react'
import { PiBriefcase, PiBackpack, PiGraduationCap } from "react-icons/pi";
const Experience = () => {
    return (
        <div className=' w-full flex flex-col py-4'>

            <div className='flex flex-col '>
                <h2 className='text-2xl font-semibold flex gap-2 items-center '>
                    <span><PiGraduationCap /></span>
                    教育背景
                </h2>

                <div className=' mt-8  w-full flex flex-row justify-between items-center *:w-1/3 font-medium'>
                    <span >2019.09 - 2023.05</span>
                    <span className=' text-center'> 多伦多大学 - 加拿大，多伦多</span>
                    <span className=' text-end'>本科</span>
                </div>

                <p>加拿大1位， 全球21位 - 2023</p>
                <p>3.54/4.0 GPA</p>
                <p>计算机科学 & 工商管理学 - 专业淘汰率(75% +)</p>
                <p>荣誉理学士 - 高度荣誉</p>

                <div className='mt-8  w-full flex flex-row justify-between items-center *:w-1/3 font-medium'>
                    <span >2016.09 - 2019.05</span>
                    <span className=' text-center'> 温斯顿丘吉尔 - 加拿大，温哥华</span>
                    <span className=' text-end'>高中</span>
                </div>
                <p>曾代表学校参加不列颠哥伦比亚大学物理奥运大赛</p>


            </div>

        </div>
    )
}

export default Experience
