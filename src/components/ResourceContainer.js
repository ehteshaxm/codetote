import React from "react";
import { Link } from "react-router-dom";

const ResourceContainer = ({ name, link, description, internal }) => {
  return (
    <div className="my-8">
      {internal ? (
        <Link to={`/resource/${link}`}>
          <div className="p-1 px-2 mb-2 rounded inline-block bg-linkBack text-gray-50 text-xl md:text-2xl font-semibold hover:bg-linkBlue transition duration-500 ease-in-out">
            {name}
          </div>
        </Link>
      ) : (
        <a href={link} target="_blank" rel="noreferrer">
          <div className="p-1 px-2 mb-1 rounded inline-block bg-linkBack text-gray-50 text-xl md:text-2xl font-semibold hover:bg-linkBlue transition duration-500 ease-in-out">
            {name}
          </div>
        </a>
      )}
      <p className="text-gray-50 text-lg md:text-xl font-medium font-fira">
        {description}
      </p>
    </div>
  );
};

export default ResourceContainer;
