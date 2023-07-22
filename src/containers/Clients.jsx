const Clients = () => {
  return (
    <div className='md:py-24 py-12 max-w-[1280px] mx-auto'>
      <div className='flex items-center justify-center flex-col gap-3'>
            <h2 className='text-tl-primary-100 text-center font-cabin text-5xl font-bold '>Our Clients</h2>
            <p className='text-[#606060] text-center text-base'>We work with reputable and trusted brands.</p>
        </div>
        <div className='flex items-center md:justify-between justify-center pt-12 flex-wrap mx-5 '>
          {[...Array(5)].map((_, index) => (
        <img
          key={index}
          src={`/images/--tt-clients-${index + 1}.png`}
          alt={`Client ${index}`}
        />
      ))}
        </div>
    </div>
  )
}

export default Clients