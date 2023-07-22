import React from 'react'

const Mission = () => {
  return (
    <div className='max-w-[1580px] flex md:py-72 py-24'>
        <div className='flex-1 hidden md:block'> 
            <div className='relative'>
            <div className='absolute -top-[10%]'>
                <img src="/images/--tt-slug.png"/>
            </div>
            <img src="/images/--tt-mission-1.png" alt="" className=' rounded-tr-3xl'/>
            </div>
            {/* <div className='bg-blue-900 rounded-tr-3xl w-full rotate-90'><img src="/images/--tt-mission-1.png" alt="" className=' rounded-tr-3xl opacty-0'/></div> */}
        </div>
        <div className=' flex items-center  flex-1'>
          <div className='max-w-[515px]  mx-4'>
          <h2 className=' text-tl-primary-100 md:text-5xl text-3xl font-bold font-cabin max-w-[515px] my-5'>Our mission is to build brands and provide world-class experiences to our clients</h2>
          <p className='md:text-lg text-base text-tl-primary-100 py-4'>Totalum Nigeria Company Limited has been supplying design-led, high-quality Aluminum Metal, Glass and Suspended Ceiling to commercial projects and individual homes for more than 25 years.</p>
          <p className='md:text-lg text-base text-tl-primary-100 py-4'>As a project supplier and contractor with over 25 years of experience, Totalum has forged strong partnerships with the most exclusive brands and manufacturers. This means we are able to offer you offices and homes that represent the perfect marriage of exceptional design and practical functionality.</p>
          </div>
        </div>
    </div>
  )
}

export default Mission