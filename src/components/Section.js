import React from "react";
import ResourceContainer from "./ResourceContainer";

const Section = ({ heading, data }) => {
  return (
    <div className="mb-12 md:mb-0">
      <p className="font-poppins font-bold text-3xl md:text-4xl text-gray-50 mb-12">
        {heading}
      </p>
      <div>
        {data.map((set) => (
          <ResourceContainer
            internal={true}
            name={set.name}
            link={set.name}
            description={set.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Section;
