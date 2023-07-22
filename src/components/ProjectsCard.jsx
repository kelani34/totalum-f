
const ProjectsCard = ({img, title, location}) => {
  return (
    <div style={{backgroundImage: `url(/images/--tt-projects-card-${img}.png)` }} className="h-[300px]  rounded-xl overflow-hidden ">
      <div className="bg-gradient-linear h-full w-full p-8 flex flex-col justify-end">
        <h3 className="text-white opacity-80 text-[10px]">{title}</h3>
        <p className="text-white text-base font-semibold max-w-[179px]">{location}</p>
      </div>
    </div>
  )
}

export default ProjectsCard