import React from 'react';

const Footer = () => {
  return (
    <div className='flex md:flex-row flex-col mb-0 h-80 justify-around items-center bg-lightBlack text-white'>
      <div className='relative md:w-96 w-52'>
        <img
          src='/message.png'
          alt='email'
          className='absolute md:-top-72 -top-44'
        />
      </div>
      <div className='flex flex-col items-end md:w-96 w-64'>
        <p className='font-poppins font-bold  md:text-4xl text-2xl mb-3'>
          Help me add more resources to the list, DM me!
        </p>

        <a
          href='https://twitter.com/ehteshaxm'
          target='_blank'
          rel='noreferrer'
          className='flex items-center hover:text-blue-700 transition duration-500 ease-in-out z-10'
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
            <p className='font-semibold md:text-3xl text-xl font-poppins'>
              ehteshaxm
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
