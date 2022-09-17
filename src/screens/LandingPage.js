import React from 'react';

import Section from '../components/Section';
import { pages } from '../data';

const LandingPage = () => {
  return (
    <div class='min-h-screen bg-darkBlack relative overflow-hidden text-white'>
      <div className='max-w-screen-2xl mx-auto z-10 px-5 sm:pt-0 pb-64'>
        <div className='text-center mb-60 sm:mt-20 relative lg:pb-0 pb-24 pt-28'>
          <img
            src='/phone.png'
            alt='phone'
            className='absolute w-32 -rotate-12 transform lg:-bottom-28 -bottom-48'
          />
          <img
            src='/medal.png'
            alt='medal'
            className='absolute lg:w-48 w-32 rotate-12 transform right-0 -bottom-48'
          />
          <h1 className='font-black text-4xl md:text-7xl font-poppins z-10 mb-4'>
            Largest Repository of Design and Development Resources
          </h1>
          <p className='font-semibold p-0 lg:text-xl lg:px-96'>
            Full Access to over 800+ websites and development resources full of
            great Icons, Graphics, Vectors, Colours and More.
          </p>
          <div className='flex sm:flex-row flex-col sm:items-stretch items-center justify-center mt-5'>
            <button className='bg-green-400 hover:bg-green-500 w-52 flex justify-center items-center pl-4 pr-2 py-2 mr-0 mb-3 sm:mb-0 sm:mr-4 rounded-md font-semibold transform transition duration-400'>
              <a
                href='https://www.buymeacoffee.com/ehtesham'
                target='_blank'
                rel='noreferrer'
                className='flex'
              >
                <p>Buy me a Pizza</p>
                <img src='/pizza.png' alt='pizza' className='w-7 ml-2' />
              </a>
            </button>
            <button className='bg-black border border-gray-500 hover:bg-gray-600 w-52 flex justify-center items-center pl-4 pr-2 py-2 p-1 rounded-md font-semibold text-white transform transition duration-400'>
              <a
                href='https://twitter.com/ehteshaxm'
                target='_blank'
                rel='noreferrer'
                className='flex'
              >
                <p>Follow on Twitter</p>
                <svg
                  fill='#fff'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 30 30'
                  width='25px'
                  height='25px'
                  className='mx-2'
                >
                  {' '}
                  <path d='M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z' />
                </svg>
              </a>
            </button>
          </div>
        </div>
        <div className='relative z-10'>
          {pages.map((page) => (
            <Section heading={page.name} data={page.resource} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
