import {AiOutlineTwitter} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const TeamCard = () => {
  return (
    <div className='bg-white rounded-[10px] p-3 flex flex-col gap-2 w-max'>

            <div className='rounded-[10px]'><img src="/images/--tt-team-1.png"/></div>
            
            <div className='max-w-[271px] flex gap-1 flex-col'>
                <div className=''>
                <h2 className='text-tl-primary-100 text-xs font-medium capitalize'>TAIWO ADEDEJI TAJUDEEN</h2>
                    <p className=' text-xs font-medium text-tl-primary-100 '>Managing Director & Project Director</p>
                    <p className='text-[#606060] text-[10px] '>Taiwo Adedeji Tajudeen is a highly talented and accomplished Project Management Executive with more than 25 years of Aluminum Consultancy and Allied products experience in and outside Nigeria.</p>
                </div>
            </div>
            <div className='flex gap-3'>
                <div className='bg-[#FAFAFA] p-2 rounded-full'>
                    <AiOutlineTwitter color="#163357"/>
                </div>
                <div className='bg-[#FAFAFA] p-2 rounded-full'>
                    <FaFacebookF color="#163357"/>
                </div>
                <div className='bg-[#FAFAFA] p-2 rounded-full'>
                    <BsInstagram color="#163357" />
                </div>
            </div>
        </div>

  )
}

export default TeamCard