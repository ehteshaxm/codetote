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
    <div class='p-4 min-h-screen relative overflow-hidden'>
      <img
        src='/accent3.svg'
        alt='blob'
        className='absolute top-0 left-0 z-0 animate-blob'
      />
      <img
        src='/accent4.svg'
        alt='blob'
        className='absolute bottom-0 right-0 z-0 animate-blob'
      />
      <div className='max-w-screen-2xl mx-auto z-10'>
        <nav className='flex flex-row-reverse items-center p-6 pl-0 mb-36'>
          <a
            href='https://twitter.com/ehteshaxm'
            target='_blank'
            rel='noreferrer'
            className='flex items-center hover:text-blue-700 transition duration-500 ease-in-out z-10'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 '
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207'
              />
            </svg>
            <p className='font-semibold text-xl font-poppins'>ehteshaxm</p>
          </a>
        </nav>
        <div className='text-center'>
          <h1 className='font-black text-5xl md:text-7xl font-poppins z-10 mb-44'>
            {par.id}
          </h1>
        </div>
        <div className='flex justify-center items-center relative z-10'>
          <div className='grid md:grid-cols-3 gap-x-20 px-4 md:px-24'>
            {data[`${par.id.replace(/ /g, '')}`].map((icon) => (
              <ResourceContainer
                name={icon.name}
                link={icon.link}
                description={icon.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
