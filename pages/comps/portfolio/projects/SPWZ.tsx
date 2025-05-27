import React from 'react'
import SPWZicon from '../icons/SPWZicon';
const SPWZ = () => {
    return (
        <div>
            SPWZ
        </div>
    )
}


const SoundWave = ({ color = "bg-success-100", className = "" }) => {
    return (
        <div className={`flex items-center h-12 gap-1 ${className}`}>
            {[...Array(16)].map((_, i) => (
                <div
                    key={i}
                    className={`w-2 ${color} rounded-full animate-soundwave`}
                    style={{
                        animationDelay: `${i * 0.3}s`
                    }}
                />
            ))}
        </div>
    );
};

export const SPWZCover = () => {
    return (
        <div className='relative w-full h-full items-center justify-center flex p-8'>
            <div className='w-full h-full z-20 relative'>
                <SPWZicon className='w-full h-full z-20 relative' />
            </div>
            <SoundWave className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10' />
        </div>


    )
}

export const SPWZContent = () => {
    return (
        <div>
            SPWZ
        </div>
    )
}

export const SPWZdesc = "SPWZ SPWZ SPWZ SPWZ SPWZ SPWZ SPWZ SPWZ SPWZ SPWZ SPWZ SPWZ SPWZ SPWZ SPWZ SPWZ SPWZ SPWZ SPWZ SPWZ SPWZ SPWZ SPWZ SPWZ SPWZ SPWZ SPWZ SPWZ SPWZ SPWZ "

export default SPWZ
