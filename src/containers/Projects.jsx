import { useState } from 'react';
import ProjectsCard from '../components/ProjectsCard';
import Button from '../components/Button';

const Projects = () => {
  const [workType, setWorkType] = useState('all');

  const works = [
{
      id: 1,
      type: 'Glass Works',
      location: "Office Development, Lekki Lagos State.",
      item: 1,
    },
    {
      id: 2,
      type: 'Aluminium Works',
      location: "Office Development, Lekki Lagos State.",
      item: 2,
    },
    {
      id: 3,
      type: 'Glass Works',
      location: "Office Development, Lekki Lagos State.",
      item: 1,
    },
    {
      id: 4,
      type: 'Aluminium Works',
      location: "Office Development, Lekki Lagos State.",
      item: 2,
    },
    {
      id: 5,
      type: 'Glass Works',
      location: "Office Development, Lekki Lagos State.",
      item: 1,
    },
    {
      id: 6,
      type: 'Aluminium Works',
      location: "Office Development, Lekki Lagos State.",
      item: 2,
    },
    {
      id: 7,
      type: 'Glass Works',
      location: "Office Development, Lekki Lagos State.",
      item: 1,
    },
    {
      id: 8,
      type: 'Aluminium Works',
      location: "Office Development, Lekki Lagos State.",
      item: 2,
    },
  ];

  const handleToggle = (type) => {
    setWorkType(type);
  };

  const filteredWorks = workType === 'all' ? works : works.filter((work) => work.type === workType);

  return (
    <div className='md:py-24 py-12 max-w-[1280px] mx-auto'>
      <div className='flex items-center justify-center flex-col gap-3'>
        <h2 className='text-tl-primary-100 text-center font-cabin md:text-5xl text-4xl font-bold '>Our Projects</h2>
        <p className='text-[#606060] text-center md:text-base text-sm'>Browse through the collection of our works.</p>
      </div>

      <div className='py-9'>
        <div className='flex items-center justify-center'>
          <div className='flex gap-6 items-center flex-wrap justify-center'>
            <Button onClick={() => handleToggle('all')} className="whitespace-nowrap" padding='py-4 px-12' {...(workType !== 'all' && { outline: true })}>All works</Button>
            <Button onClick={() => handleToggle('Aluminium Works')} className="whitespace-nowrap" padding='py-4 px-12' {...(workType !== 'Aluminium Works' && { outline: true })}>Aluminium Works</Button>
          <Button onClick={() => handleToggle('Glass Works')} className="whitespace-nowrap" padding='py-4 px-12' {...(workType !== 'Glass Works' && { outline: true })}>Glass Works</Button>
          </div>
        </div>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6 py-9 mx-5'>
        {filteredWorks && filteredWorks.map((work) => (
          <div key={work.id}>
            <ProjectsCard title={work.type} location={work.location} img={work.item} />
          </div>
        ))}
        
      </div>
      <div className=' flex items-center justify-center py-9'>

      <Button outline padding='py-4 px-12'>View more</Button>

      </div>
    </div>
  );
};

export default Projects;
