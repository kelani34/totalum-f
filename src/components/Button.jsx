const Button = ({children, outline, className, padding, onClick}) => {
  return (
    <button onClick={onClick} className={` ${padding ? padding : "py-5 px-8"} ${className} rounded-[50px]  text-center md:text-base text-sm font-bold ${outline ? " bg-[#FAFAFA] text-tl-primary-100 active:bg-tl-primary-100 active:text-white duration-100": " text-white bg-tl-primary-100 active:bg-[#FAFAFA] active:text-tl-primary-100 duration-100"}`}>{children}</button>
  )
};



export default Button;