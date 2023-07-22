import { useEffect, useState } from "react";
import Button from "../components/Button"
import ReviewCard from "../components/ReviewCard"

const Reviews = () => {
  const reviews = [ 
    {
      id: 1,
      name: "Karen Lynn",
      position: "Founder @ Company",
      text: "Totalium is an excellent company. in everything uptime, fast technical support, sales, & billing-friendly people. I recommend it to anyone who is looking for a building solution.",
      title: "Totalium is an Excellent company ",
      rating: 5,
    },
    {
      id: 1,
      name: "Karen Lynn",
      position: "Founder @ Company",
      text: "Totalium is an excellent company. in everything uptime, fast technical support, sales, & billing-friendly people. I recommend it to anyone who is looking for a building solution.",
      title: "Totalium is an Excellent company ",
      rating: 5,
    },
    {
      id: 1,
      name: "Karen Lynn",
      position: "Founder @ Company",
      text: "Totalium is an excellent company. in everything uptime, fast technical support, sales, & billing-friendly people. I recommend it to anyone who is looking for a building solution.",
      title: "Totalium is an Excellent company ",
      rating: 5,
    },
  ]

    const [currentReviewsIndex, setCurrentReviewsIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReviewsIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

    const currentReviews = reviews[currentReviewsIndex];

  return (
    <div className="max-w-[1280px] md:mx-auto flex justify-between items-center md:flex-row flex-col mx-5 md:py-24 py-12">
      <div className="flex flex-col md:gap-10 gap-5 md:items-start items-center md:my-auto my-5">
        <div>
        <Button>Clients Reviews</Button>
        </div>
        <div className="max-w-[421px] flex flex-col md:gap-10 gap-5">
        <h1 className="text-tl-primary-100  md:text-6xl text-4xl font-cabin font-bold md:text-left text-center">What clients say about our services</h1>
        <p className="md:text-lg text-base md:text-left text-center text-tl-primary-100 opacity-60">Over the last 25 years, Totalium has accumulated too many testimonials, reviews, and awards for better service.</p>
        </div>
      </div>
      <div>
        <ReviewCard title={currentReviews.title} name={currentReviews.name} text={currentReviews.text} position={currentReviews.position} rating={currentReviews.rating} />
        <div className="flex items-center justify-center my-4">
          {reviews.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full mx-1 ${
                  currentReviewsIndex === index
                    ? "bg-tl-primary-100"
                    : "bg-tl-primary-100 opacity-20"
                }`}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Reviews