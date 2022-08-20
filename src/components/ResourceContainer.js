import React from 'react';
import { Link } from 'react-router-dom';

const ResourceContainer = ({ name, link, description, internal, image }) => {
  return (
    <div className='w-80 md:mr-8 my-4 drop-shadow-2xl border-md transform transition duration-200 hover:scale-110'>
      <img
        src={image}
        alt='contentImg'
        className='rounded-3xl relative z-0 border-2'
      ></img>
      <div className='p-4 bg-white rounded-3xl -mt-10 relative z-10 border-2'>
        {internal ? (
          <Link to={`/resource/${link}`}>
            <div className='mb-2 rounded inline-block text-xl md:text-2xl font-bold'>
              {name}
            </div>
          </Link>
        ) : (
          <a href={link} target='_blank' rel='noreferrer'>
            <div className='mb-1 rounded inline-block  text-xl md:text-2xl font-bold'>
              {name}
            </div>
          </a>
        )}
        <p className=' text-md md:text-md font-medium font-fira'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ResourceContainer;
