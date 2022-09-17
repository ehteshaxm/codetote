import React from 'react';
import { Link } from 'react-router-dom';
import Tag from './Tag';

const ResourceContainer = ({
  name,
  link,
  description,
  internal,
  image,
  tags,
}) => {
  if (internal) {
    return (
      <Link to={`/resource/${link}`}>
        <div className='w-80 md:mx-6 my-4 drop-shadow-2xl font-poppins border-md transform transition duration-200 hover:scale-105'>
          <img
            src={image}
            alt='contentImg'
            className='rounded-3xl relative z-0'
          ></img>
          <div className='p-4 bg-lightBlack rounded-3xl -mt-10 relative z-10'>
            <div className='mb-2 rounded inline-block text-xl md:text-2xl font-bold'>
              {name}
            </div>
            <p className=' text-md md:text-md font-medium font-fira'>
              {description}
            </p>
            <div className='flex flex-wrap pt-5'>
              {tags && tags.map((tag, index) => <Tag text={tag} />)}
            </div>
          </div>
        </div>
      </Link>
    );
  } else {
    return (
      <a href={link} target='_blank' rel='noreferrer'>
        <div className='w-80 md:mx-6 my-4 drop-shadow-2xl font-poppins border-md transform transition duration-200 hover:scale-105'>
          <img
            src={image}
            alt='contentImg'
            className='rounded-3xl relative z-0'
          ></img>
          <div className='p-4 bg-lightBlack border border-darkBlack rounded-3xl -mt-10 relative z-10'>
            <div className='mb-1 rounded inline-block  text-xl md:text-2xl font-bold'>
              {name}
            </div>
            <p className=' text-md md:text-md font-medium font-fira'>
              {description}
            </p>
          </div>
        </div>
      </a>
    );
  }
};

export default ResourceContainer;
