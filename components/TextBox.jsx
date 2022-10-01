import React from 'react'

const TextBox = ({lable,placeholder}) => {
  return (
    <div className='flex w-full font-primary flex-col gap-1'>
       <div>{lable}<span className="text-red-500">*</span> </div>
       <input type="text" placeholder={placeholder} className='w-full bg-gray-300/30 p-3 outline-none text-sm text-gray-600 rounded' />
    </div>
  )
}

export default TextBox