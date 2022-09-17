import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import ResourceContainer from '../components/ResourceContainer';
import { DataContext } from '../DataContext';
import { useLocation } from 'react-router-dom';

const ContentPage = () => {
  const par = useParams();
  const data = useContext(DataContext);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div class='p-4 min-h-screen overflow-hidden bg-darkBlack text-white pt-56 pb-64'>
      <div className='max-w-screen-2xl mx-auto'>
        <div className='text-center'>
          <h1 className='font-black text-5xl md:text-7xl font-poppins mb-44'>
            {par.id}
          </h1>
        </div>
        <div className='flex justify-start sm:flex-row flex-col items-center relative flex-wrap'>
          {data[`${par.id.replace(/ /g, '')}`].map((icon) => (
            <ResourceContainer
              name={icon.name}
              link={icon.link}
              description={icon.description}
              image={icon.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
