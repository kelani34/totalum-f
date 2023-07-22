import React, { useState } from 'react'
import Button from './Button'
import { Menu } from 'iconsax-react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
        name: "Home",
        route: '/'
    },
        {
        name: "About Us",
        route: '/'
    },
        {
        name: "Services",
        route: '/'
    },
        {
        name: "Projects",
        route: '/projects'
    },
        {
        name: "Contact Us",
        route: '/'
    },
  ]

    const [navShow, setNavShow] = useState(false);

  const toggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = "auto";
      } else {
        // Prevent scrolling
        document.body.style.overflow = "hidden";
      }
      return !status;
    });
  };

  return (
    <nav className=' fixed w-full z-10 '>
        <div className="absolute inset-0 bg-opacity-80 backdrop-blur-lg"></div>
         <div className='relative z-50'>
        <div className='max-w-[1280px] mx-auto m-4 px-4 flex justify-between items-center'>
        <Link to='/'>
            <img src="/images/--tt-logo.png" alt="logo"/>
        </Link>
        <div className='gap-10 font-semibold text-base text-tl-primary-200 md:flex hidden'>
            {links.map((link) => (
                <a href={link.route} key={link.name} className='hover:text-slate-700 duration-300 hover:scale-110'>{link.name}</a>
            ))}
        </div>
        <div className='md:block hidden'>
            <Button>Download Profile</Button>
        </div>
        <div className='block md:hidden'>
            {!navShow && (
          <Menu
            size="24"
            color="#163357"
            onClick={() => toggleNav()}
            aria-label="Toggle Menu"
          />
        )}

        <div
          className={`fixed top-0 left-0 h-full w-full transform bg-[#163357] bg-opacity-80 duration-300 ease-in-out z-50 ${
            navShow ? "translate-x-0" : "translate-x-full"
          }`}
        >
            <div className="flex justify-end">
            <AiOutlineClose
              className=" mr-8 mt-11 h-8 "
              size={24}
              onClick={toggleNav}
            />
          </div>

          <nav className="fixed mt-8 h-full z-20">
            <div className="px-12 py-4">
              {links.map((link) => (
                <div key={link.name} className="px-12 py-4">
                  <a
                    href={link.route}
                    className=" text-2xl font-semibold tracking-widest text-white capitalize"
                    onClick={toggleNav}
                  >
                    {link.name}
                  </a>
                </div>
              ))}
              <div className="px-12">
                <Button onClick={() => {}}>Download Profile</Button>
              </div>
            </div>
          </nav>

        </div>
        </div>
        </div>
        </div>
    </nav>
  )
}

export default Navbar