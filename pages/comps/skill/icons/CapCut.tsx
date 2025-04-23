import React from 'react'

const CapCut = ({ className = '', ...props }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 192 192" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none"
      {...props}
    >
      <path 
        stroke="currentColor" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="12" 
        d="M170 42 22 124v14c0 6.627 5.373 12 12 12h78c6.627 0 12-5.373 12-12v-9.5"
      />
      <path 
        stroke="currentColor" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth="12" 
        d="M170 150 22 68V54c0-6.627 5.373-12 12-12h78c6.627 0 12 5.373 12 12v9.5"
      />
    </svg>
  )
}

export default CapCut
