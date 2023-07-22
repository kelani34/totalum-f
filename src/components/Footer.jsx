const Footer = () => {
  return (
    <footer className='bg-tl-primary-100 '>
        <div className='max-w-[1280px] mx-auto px-4 flex md:flex-row flex-col justify-between md:py-24 py-6'>
            <div className="flex-1">
              <h2 className="text-white text-xl font-semibold my-5 capitalize">About Totalum</h2>
              <p className="text-white text-base max-w-[290px]">Totalum Nigeria Company Limited has been supplying design-led, high-quality Aluminum Metal, Glass and Suspended Ceiling to commercial projects and individuals homes for more than 25 years.</p>
              <div>

              </div>
            </div>
            <div className="flex-1 md:my-0 my-5">
              <h2 className="font-semibold text-xl text-white">ADDRESS</h2>
              <div className="grid grid-cols-2 justify-between md:gap-7 gap-5">

                  <p className="max-w-[220px] text-white text-base my-5 ">Lagos <br/> 11, Bamgboye Street, Agiliti, Mile 12,<br /> Lagos.<br/> P.O.Box 5233, Somolu, Lagos.</p>

                  <p className="max-w-[220px] text-white text-base my-5 ">Abuja<br/> Aquamarine Housing Estate,Plot 40, Wumba District, Cadastral Zone C10,FCC Phase III, Abuja.</p>

                  <p className="max-w-[220px] text-white text-base my-5 ">Factory<br />2/4, Sholanke Close, Off Adedoyin StreetKosofe, Mile 12, Lagos.</p>

                  <p className="max-w-[220px] text-white text-base my-5 ">Opening Hours<br/>Mon – Sat: 9am – 5:30pm <br/> Sun: Closed</p>

              </div>

            </div>
            
        </div>
        <div className="md:mt-24 mt-2">
            <p className="text-center text-white py-5">© 2023 Totalum Limited. All Rights Reserved.</p>  
        </div>
    </footer>
  )
}

export default Footer