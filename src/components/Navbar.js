import React from 'react';

const Navbar = () => {
  return (
    <div className='bg-black text-white'>
      <nav className='px-5 max-w-screen-2xl sm:mx-auto flex justify-between items-center py-4 mb-36'>
        <h1 className='font-black text-2xl md:text-3xl font-poppins'>
          CodeBag
        </h1>
        <a
          href='https://twitter.com/ehteshaxm'
          target='_blank'
          rel='noreferrer'
        >
          <button className='bg-twitterBlue flex justify-center items-center sm:pl-4 sm:pr-2 px-1 rounded-md font-semibold hover:bg-twitterHover'>
            <p className='hidden sm:inline-block'>Follow on Twitter</p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 28.87 28.87'
              className='w-10 hover:bg-twitterHover'
            >
              <g data-name='Layer 2'>
                <g data-name='Layer 1'>
                  <rect
                    width='28.87'
                    height='28.87'
                    fill='#00c7ff'
                    rx='6.48'
                    ry='6.48'
                  />
                  <path
                    fill='#fff'
                    fill-rule='evenodd'
                    d='M11.74 18.11a3.29 3.29 0 0 1-3.05-2.28 3.26 3.26 0 0 0 1.41 0A3.28 3.28 0 0 1 8 14.26a3.18 3.18 0 0 1-.48-1.75 3.24 3.24 0 0 0 1.46.4 3.3 3.3 0 0 1-1.35-2A3.25 3.25 0 0 1 8 8.54 9.39 9.39 0 0 0 14.76 12c0-.13 0-.24-.05-.36a3.28 3.28 0 0 1 5.58-2.74.17.17 0 0 0 .17.05 6.6 6.6 0 0 0 1.91-.73A3.36 3.36 0 0 1 21 10a6.3 6.3 0 0 0 1.83-.49l-.33.49a6.44 6.44 0 0 1-1.19 1.13.11.11 0 0 0-.05.1 9.09 9.09 0 0 1-.06 1.46 9.66 9.66 0 0 1-.85 2.92 9.44 9.44 0 0 1-1.77 2.59 8.77 8.77 0 0 1-4.51 2.51 9.79 9.79 0 0 1-1.83.22A9.27 9.27 0 0 1 7 19.52l-.08-.05a6.64 6.64 0 0 0 3.26-.47 6.53 6.53 0 0 0 1.56-.89z'
                  />
                </g>
              </g>
            </svg>
          </button>
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
