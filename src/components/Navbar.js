import React from 'react';
import { Link } from 'react-router-dom';
import { TwitterShareButton } from 'react-share';

const Navbar = () => {
  return (
    <div className='text-white bg-lightBlack'>
      <nav className='px-5 max-w-screen-2xl sm:mx-auto flex justify-between items-center py-4'>
        <Link to={'/'}>
          <div className='flex items-end'>
            <img src='/backpack.png' alt='backpack' className='w-10 mr-2' />
            <h1 className='font-black text-2xl md:text-3xl font-poppins'>
              Codetote
            </h1>
          </div>
        </Link>
        <TwitterShareButton
          url={'https://www.codetote.com'}
          title={
            'Free Access to 800+ Design and Development Resources, Full of great Icons, Illustrations, Vectors and more'
          }
          via={'ehteshaxm'}
        >
          <button className='bg-twitterBlue flex justify-center items-center sm:pl-4 sm:pr-2 sm:py-2 p-1 rounded-md font-semibold hover:bg-twitterHover transform transition duration-500'>
            <p className='hidden sm:inline-block'>Share on Twitter</p>
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
          </button>
        </TwitterShareButton>
      </nav>
    </div>
  );
};

export default Navbar;
