import React from 'react'
import ServicesCard from '../components/ServicesCard'

const Services = () => {
    const services =  [
        {
            id: 1,
            title: "Consulting",
            text: "Website migration redirects all of your old webpages to new pages or changing site.",
        },
         {
            id: 2,
            title: "Engineering",
            text: "Hosting gives you the tools you need to run website and  portions of your business.",
        },
         {
            id: 3,
            title: "Planning & Design",
            text: "Our servers support a best open-source eCommerce tools & includes features.",
        },
         {
            id: 4,
            title: "Delivery",
            text: "Build a professional website for free with us. Also mobile-friendly & modern templates. ",
        },
         {
            id: 5,
            title: "Installation",
            text: "The PCI Security Standards Council operates programs to train, test, and qualify.",
        },
         {
            id: 6,
            title: "Maintenance",
            text: "Blogging solutions for first-time bloggers as well as the seasoned with experts.",
        },
         {
            id: 7,
            title: "Production Fabrication",
            text: "Data backup is the practice of copying data a primary to a secondary location.",
        },
         {
            id: 8,
            title: "Assembly",
            text: "Website security is any action taken or application put in place to ensure.",
        },
    ]
  return (
    <div className='py-12 max-w-[1280px] mx-auto'>
        <div className='flex items-center justify-center flex-col md:gap-3 gap-2'>
            <h2 className='text-tl-primary-100 text-center font-cabin md:text-5xl text-4xl font-bold '>Our services</h2>
            <p className='text-[#606060] text-center md:text-base text-sm'>An overview of what we do</p>
        </div>

        <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6 py-9 mx-5'>

            {services && services.map((service) => (
                 <ServicesCard key={service.id} title={service.title} text={service.text} img={service.id} />
            ))}
           
        </div>


    </div>
  )
}

export default Services