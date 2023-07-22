import TeamCard from "../components/TeamCard"

const Team = () => {
  return (
    <div className="bg-[#FAFAFA]">
      <img src="/images/--tt-team-2.png" alt="" className="absolute hidden md:block "/>
      <div className="md:py-24 py-12 max-w-[1280px] mx-auto">
        <div className='flex items-center justify-center flex-col gap-3'>
        <h2 className='text-tl-primary-100 text-center font-cabin md:text-5xl text-4xl font-bold '>Our Team</h2>
        <p className='text-[#606060] text-center md:text-base text-sm'>Meet our amazing team members.</p>
      </div>
      <div className="grid md:my-24 my-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 justify-items-center gap-6 md:py-9 py-4  mx-5">
      <TeamCard />
            <TeamCard />
                  <TeamCard />
                        <TeamCard />
      </div>
      </div>
    </div>
  )
}

export default Team