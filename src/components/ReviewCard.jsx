import { AiTwotoneStar } from 'react-icons/ai';

const ReviewCard = ({ rating, title, text, name, position }) => {
  const createStarsArray = (rating) => Array.from({ length: rating }, (_, index) => index);

  return (
    <div className="bg-[#FAFAFA] p-8 rounded-[10px]">
      <div className="flex items-center justify-center my-8">
        {rating && createStarsArray(rating).map((index) => (
          <div key={index}>
            <AiTwotoneStar color="#00B67A" size={25} />
          </div>
        ))}
      </div>
      <div>
        <div className="">
          <h3 className="text-lg text-tl-primary-100 font-semibold text-center">{title} </h3>
          <p className="text-lg text-tl-primary-100 text-center max-w-[336px] my-3">{text}</p>
        </div>
        <div>
          <h3 className="text-lg text-tl-primary-100 font-semibold text-center my-2">{name}</h3>
          <p className="text-sm opacity-80 text-center text-tl-primary-100">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
