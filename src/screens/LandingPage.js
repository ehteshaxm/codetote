import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Section from '../components/Section';
import { pages } from '../data';

const LandingPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div class='p-4 bg-backblack min-h-screen relative overflow-hidden'>
      <img
        src='/accent7.svg'
        alt='blob'
        className='absolute top-0 left-0 z-0 animate-blob'
      />
      <img
        src='/accent8.svg'
        alt='blob'
        className='absolute bottom-0 right-0 z-0 animate-blob'
      />
      <div className='max-w-screen-xl mx-auto z-10 px-5'>
        <nav className='flex justify-between items-center py-4 mb-36'>
          <h1 className='font-black text-2xl md:text-3xl font-poppins text-gray-50 '>
            Codetote
          </h1>
          <a
            href='https://twitter.com/ehteshaxm'
            target='_blank'
            rel='noreferrer'
            className='flex items-center text-gray-400 hover:text-blue-700 transition duration-500 ease-in-out z-10'
          >
            <div className='hidden md:flex items-center'>
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
            </div>
          </a>
        </nav>
        <div className='text-center'>
          <h1 className='font-black text-5xl md:text-7xl font-poppins text-gray-50 z-10 mb-60'>
            Developer Resources
          </h1>
        </div>
        <div className='flex justify-center relative z-10'>
          <div className='grid lg:grid-flow-col gap-x-32'>
            {pages.map((page) => (
              <Section heading={page.name} data={page.resource} />
            ))}
          </div>
        </div>
        <div className='flex flex-col items-end p-28'>
          <p className='font-poppins font-bold text-gray-50 text-3xl mb-3'>
            want to add something on the list, get me on Twitter
          </p>

          <a
            href='https://twitter.com/ehteshaxm'
            target='_blank'
            rel='noreferrer'
            className='flex items-center text-gray-400 hover:text-blue-700 transition duration-500 ease-in-out z-10'
          >
            <div className='flex items-center'>
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
              <p className='font-semibold text-3xl font-poppins'>ehteshaxm</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
