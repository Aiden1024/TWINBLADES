import React from 'react'
import MVSEIcon from '../icons/MVSEicon';


const MVSE = () => {
    return (
        <div>
            MVSE
        </div>
    )
}

const StyledText = ({ text }) => (
    <p><span className='font-medium text-2xl  '>{text[0]}</span>{text.slice(1)}</p>
);




export const MVSECover = () => {
    return (
        <div className=' w-full h-full items-center justify-center flex '>
            <div className=' flex flex-col items-start text-lg w-full h-full p-8'>
                <MVSEIcon className=' w-full h-full'/>

            </div>
        </div>
    )
}

export const MVSEContent = () => {
    return (
        <div>
            MVSE
        </div>
    )
}

export const MVSEdesc = "MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE MVSE "

export default MVSE
