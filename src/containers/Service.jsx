import React from 'react'

const Service = () => {
  return (
    <div className='max-w-[1280px] mx-auto py-12'>
      <div className=' rounded-3xl bg-[#FAFAFA] p-10 mx-5'>
        <div className='flex justify-between md:flex-row md:items-start md:gap-0 flex-col items-center gap-7'>
          <div className=' flex gap-7 items-center'>
          <div className='flex gap-6'>
            <div>
              <img src='/icons/--tt-star-1.svg' alt=""/>
            </div>
            <div className='max-w-[249px]'>
            <h3 className='text-2xl font-semibold text-tl-primary-100 '>Loyalty to clients</h3>
            <p className=' opacity-80  text-[#606060] text-lg my-6 '>97% Of our customers would recommend us to a friend</p>
            </div>
          </div>
          <div className=' opacity-10 bg-tl-primary-100 h-3/4 w-[2px]'/>
          </div>

          <div className=' flex gap-7 items-center'>
          <div className='flex gap-6'>
            <div>
              <img src='/icons/--tt-star-2.svg' alt=""/>
            </div>
            <div className='max-w-[249px]'>
            <h3 className='text-2xl font-semibold text-tl-primary-100 '>Service response</h3>
            <p className=' opacity-80  text-[#606060] text-lg my-6 '>110k+ Active services helping our clients succeed</p>
            </div>
          </div>
          <div className=' opacity-10 bg-tl-primary-100 h-3/4 w-[2px]'/>
          </div>

          <div className=' flex gap-7 items-center'>
          <div className='flex gap-6'>
            <div>
              <img src='/icons/--tt-star-3.svg' alt=""/>
            </div>
            <div className='max-w-[249px]'>
            <h3 className='text-2xl font-semibold text-tl-primary-100 '>Global acceptance</h3>
            <p className=' opacity-80 text-[#606060] text-lg my-6 '>250 Countries/territories where people choose our services</p>
            </div>
          </div>
          <div className=' opacity-10 bg-tl-primary-100 h-3/4 w-[2px]'/>
          </div>
          <div>
            <img src="/images/--tt-service-1.png"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service