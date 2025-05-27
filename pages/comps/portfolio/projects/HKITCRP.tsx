import React from 'react'
import PiIcon from '../icons/Pi'
import { useTheme } from 'next-themes'
const HKITCRP = () => {
    return (
        <div>
            RP
        </div>
    )
}



export const RPCover = () => {
  const { theme, setTheme } = useTheme();
    return (
        <div className=' w-full h-full items-center justify-center flex p-4 text-start '>
            <div className='flex flex-row gap-4 '>
                <PiIcon className={`size-12 ${theme === "light" ?"fill-[#603294]": "fill-[#B886DE]" }`}/>
                <div className=' flex flex-col items-start'>
                    <h2 className=' text-2xl tracking-widest'>創 新 科 技 署</h2>
                    <h2 className=' text-xs'>Innovation and Technology Commission</h2>
                    {/* <h2 className=' text-xs'>The Hong kong I.T.C.</h2> */}
                </div>
            </div>
        </div>
    )
}

export const RPContent = () => {
    return (
        <div>
            RP
        </div>
    )
}

export const RPdesc = "SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP SLP "

export default HKITCRP
