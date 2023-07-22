const Input = ({label, placeholder, id}) => {
  return (
    <label htmlFor={id}>
        <p className=' my-3 text-lg font-medium text-[#606060]'>{label}</p>
        <input id={id} className='rounded-[50px] outline-none bg-[#fafafa] py-4 px-8 w-full' placeholder={placeholder}/>
    </label>
  )
}

export default Input