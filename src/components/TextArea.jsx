import React from 'react'

const TextArea = ({label, id, placeholder}) => {
  return (
    <label>
      <p className=' my-3 text-lg font-medium text-[#606060]'>{label}</p>
    <textarea id={id} className='rounded-[10px] outline-none bg-[#fafafa] py-4 px-8 w-full h-[150px] resize-none' placeholder={placeholder}/>

    </label>
  )
}

export default TextArea