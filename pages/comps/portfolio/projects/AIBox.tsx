import React from 'react'
import AIBOXLogo from '../icons/AIBOXLogo'
import AIBOXname from '../icons/AIBOXnameIcon'
const AIBox = () => {
    return (
        <div>
            AIBox
        </div>
    )
}

export const AIBoxCover = () => {
    return (
        <div className=' w-full h-full items-center justify-center flex '>
            <div className=' w-full h-full p-8 gap-4 flex flex-row items-center '>
                <AIBOXname/>
                <AIBOXLogo className=' size-12'/>
            </div>
        </div>
    )
}

export const AIBoxContent = () => {
    return (
        <div>
            AIBox
        </div>
    )
}

export const AIBoxdesc = "AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox AIBox "

export default AIBox
