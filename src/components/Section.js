import React from 'react';
import ResourceContainer from './ResourceContainer';

const Section = ({ heading, data }) => {
  return (
    <div className='mb-12 md:mb-0 w-full'>
      <p className='font-poppins font-bold text-3xl md:text-4xl mb-12 mt-12'>
        {heading}
      </p>
      <div className='flex flex-wrap'>
        {data.map((set) => (
          <ResourceContainer
            internal={true}
            name={set.name}
            link={set.name}
            description={set.description}
            image={set.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Section;
