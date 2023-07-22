import PropTypes from 'prop-types';

const ServicesCard = ({title, text, img}) => {
  return (
    <div className='bg-[#FAFAFA] rounded-xl md:p-8 p-6 flex flex-col gap-8'>
      <div>
      <img src={`/images/--tt-services-card-${img}.png`}/>
      </div>
      <div className='flex flex-col gap-4'>
        <h3 className='text-2xl font-semibold text-tl-primary-100'>{title}</h3>
        <p className='text-lg opacity-60 text-tl-primary-100'>{text}</p>
      </div>
    </div>
  )
}

ServicesCard.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};


export default ServicesCard