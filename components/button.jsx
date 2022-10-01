import React from 'react'


const Button = ({textColor,bgColor,placeholder}) => {
  return (
    <div>
        <button className={`w-24   md:w-32 h-8 md:h-12 lg:w-36 text-xs md:text-base xl:text-lg outline-none font-primary  rounded ${textColor} ${bgColor}`}>{placeholder}</button>
    </div>
  )
}

export default Button