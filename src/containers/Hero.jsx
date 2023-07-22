import React from 'react'
import Button from '../components/Button'

const Hero = () => {
  return (
    <div className='flex max-w-[1580px] mx-auto overflow-hidden relative h-screen md:h-auto'>
      <img src='/images/--tt-hero-1.png' className='absolute z-[-1] opacity-50 h-full block md:hidden'/>
        <div className='mx-4 flex-1 flex items-center justify-center py-28'>
            <div className='max-w-[648px]'>
            <h1 className='text-tl-primary-100 font-cabin lg:text-8xl md:text-6xl text-5xl font-bold my-4 whitespace-break-spaces mb-8 lg:text-left text-center'>Welcome to Totalum Nigeria Company Ltd.</h1>
            <p className='text-tl-primary-200 md:text-lg text-base font-medium my-6 lg:text-left text-center'>Aluminium Metal, Glass and Suspended Ceiling Contractor for over 25 years trusted by 5,000+ agencies, developers, and businesses who demand high performance from their buildings!</p>
            <div className='flex items-center my-8 lg:justify-start justify-center'><img src="/icons/--tt-bang.svg" alt="" className='md:w-[35px] md:h-[35px] w-[25px] h-[25px]' /> <p className='md:text-base text-sm font-semibold text-tl-primary-200'>Top-Rated Aluminium Metal & Glass Company</p></div>
            <div className='flex md:block justify-center'>
            <Button>Contact Us Now</Button>
            </div>
            </div>
        </div>
        
        <div className='relative hidden md:block'>
            <img src='/images/--tt-hero-1.png'/>
            <div className='absolute bottom-0 -left-[10%]'>
            <img src="/images/--tt-slug.png" alt=""/>
        </div>
        </div>
    </div>
  )
}

export default Hero