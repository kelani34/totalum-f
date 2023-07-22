import React from 'react'
import Input from '../components/Input'
import TextArea from '../components/TextArea'
import Button from '../components/Button'

const Contact = () => {
  return (
    <div className='max-w-[1580px] flex'>
        <div className='flex-1 flex items-center justify-center md:py-24 py-12 relative'>
            <div className='md:w-[70%] z-10'>
            <div>
                <h2 className='text-tl-primary-100 text-5xl font-bold font-cabin '>Contact Us</h2>
                <p className='text-xl font-semibold text-[#606060] py-4'>For enquiries please complete the form.</p>
            </div>
            <div className='flex flex-col gap-7'>
                <Input label="Your name" id="name" placeholder="Enter your full name"/>
                <Input label="Email address" id="email" placeholder="Enter your email"/>
                <Input label="Subject" id="subject" placeholder="Enter subject"/>
                <TextArea label="Write your message" id="message" placeholder="Write us your question here..."/>
                
                <div><Button>Send Message</Button></div>
            </div>

             <div className=' my-10 block md:hidden'>
            <div className='flex flex-col gap-8'>
            <div className='max-w-[352px]'>
                <h3 className='text-white text-2xl font-semibold opacity-80'>To speak to a member of the team please call us on:</h3>
                <p className='text-white text-lg opacity-80'>+234 (0) 906 000 3515 </p>
                <p className='text-white text-lg opacity-80'>+234 (0) 802 224 1789</p>
            </div>
            <div className='max-w-[352px]'>
                <h3 className='text-white text-2xl font-semibold opacity-80'>Alternatively you can email us at:</h3>
                <p className='text-white text-lg opacity-80'>info@totalumlimited.com  </p>
                <p className='text-white text-lg opacity-80'>totalumnigltd@yahoo.com</p>
                <p className='text-white text-lg opacity-80' >totalumnigltd@ail.com</p>
            </div>
            </div>
            </div>

            
            </div>
            <img src="/images/--tt-contact-1.png" className='absolute h-full opacity-60 block md:hidden' />
        </div>
        <div style={{backgroundImage: 'url(/images/--tt-contact-1.png)'}} className=' bg-cover bg-no-repeat flex-1 hidden justify-center relative  md:flex'>

                <img src="/images/--tt-slug.png" className='absolute bottom-0 left-[-10%]'/>

            <div className='flex h-1/2 justify-center items-center'>
            <div className='flex flex-col gap-8'>
            <div className='max-w-[352px]'>
                <h3 className='text-white text-2xl font-semibold opacity-80'>To speak to a member of the team please call us on:</h3>
                <p className='text-white text-lg opacity-80'>+234 (0) 906 000 3515 </p>
                <p className='text-white text-lg opacity-80'>+234 (0) 802 224 1789</p>
            </div>
            <div className='max-w-[352px]'>
                <h3 className='text-white text-2xl font-semibold opacity-80'>Alternatively you can email us at:</h3>
                <p className='text-white text-lg opacity-80'>info@totalumlimited.com  </p>
                <p className='text-white text-lg opacity-80'>totalumnigltd@yahoo.com</p>
                <p className='text-white text-lg opacity-80' >totalumnigltd@ail.com</p>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Contact