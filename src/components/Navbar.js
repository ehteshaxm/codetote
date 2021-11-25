import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="pl-2">
      <div className="mb-4">
        <p className="p-2 px-3 text-base font-medium">Frontend</p>
        <div className="text-gray-500">
          <Link to="frontend">
            <p className="p-2 px-3 font-medium hover:bg-purple-300 hover:text-purple-800 rounded">
              Introduction
            </p>
          </Link>
          <Link to="htmlcss">
            <p className="p-2 px-3 font-medium hover:bg-purple-300 hover:text-purple-800 rounded">
              HTML/CSS
            </p>
          </Link>
          <p className="p-2 px-3 font-medium hover:bg-purple-300 hover:text-purple-800 rounded">
            Vanilla Javascript
          </p>
          <p className="p-2 px-3 font-medium hover:bg-purple-300 hover:text-purple-800 rounded">
            React
          </p>
          <p className="p-2 px-3 font-medium hover:bg-purple-300 hover:text-purple-800 rounded">
            Angular
          </p>
          <p className="p-2 px-3 font-medium hover:bg-purple-300 hover:text-purple-800 rounded">
            Vue
          </p>
        </div>
      </div>
      <div className="mb-4">
        <p className="p-2 px-3 text-base font-medium">Backend</p>
        <div className="text-gray-500">
          <p className="p-2 px-3 font-medium hover:bg-purple-300 hover:text-purple-800 rounded">
            Introduction
          </p>
          <p className="p-2 px-3 font-medium hover:bg-purple-300 hover:text-purple-800 rounded">
            Javascript
          </p>
          <p className="p-2 px-3 font-medium hover:bg-purple-300 hover:text-purple-800 rounded">
            Python
          </p>
          <p className="p-2 px-3 font-medium hover:bg-purple-300 hover:text-purple-800 rounded">
            Java
          </p>
        </div>
      </div>
      <div className="mb-4">
        <p className="p-2 px-3 text-base font-medium">Full-Stack</p>
        <div className="text-gray-500">
          <p className="p-2 px-3 font-medium hover:bg-purple-300 hover:text-purple-800 rounded">
            Introduction
          </p>
          <p className="p-2 px-3 font-medium hover:bg-purple-300 hover:text-purple-800 rounded">
            Javascript Stacks
          </p>
          <p className="p-2 px-3 font-medium hover:bg-purple-300 hover:text-purple-800 rounded">
            Python Stacks
          </p>
          <p className="p-2 px-3 font-medium hover:bg-purple-300 hover:text-purple-800 rounded">
            Java Stacks
          </p>
        </div>
      </div>
      <div className="mb-4">
        <p className="p-2 px-3 text-base font-medium">Interview Preperation</p>
        <div className="text-gray-500">
          <p className="p-2 px-3 font-medium hover:bg-purple-300 hover:text-purple-800 rounded">
            Introduction
          </p>
          <p className="p-2 px-3 font-medium hover:bg-purple-300 hover:text-purple-800 rounded">
            Javascript DSA
          </p>
          <p className="p-2 px-3 font-medium hover:bg-purple-300 hover:text-purple-800 rounded">
            Python DSA
          </p>
          <p className="p-2 px-3 font-medium hover:bg-purple-300 hover:text-purple-800 rounded">
            Java DSA
          </p>
          <p className="p-2 px-3 font-medium hover:bg-purple-300 hover:text-purple-800 rounded">
            C++ DSA
          </p>
          <p className="p-2 px-3 font-medium hover:bg-purple-300 hover:text-purple-800 rounded">
            Operating System
          </p>
          <p className="p-2 px-3 font-medium hover:bg-purple-300 hover:text-purple-800 rounded">
            Computer Networking
          </p>
          <p className="p-2 px-3 font-medium hover:bg-purple-300 hover:text-purple-800 rounded">
            DBMS
          </p>
        </div>
      </div>
      <div className="mb-4">
        <p className="p-2 px-3 text-base font-medium">
          Competitive Programming
        </p>
        <div className="text-gray-500">
          <p className="p-2 px-3 font-medium hover:bg-purple-300 hover:text-purple-800 rounded">
            Introduction
          </p>
          <p className="p-2 px-3 font-medium hover:bg-purple-300 hover:text-purple-800 rounded">
            Resources
          </p>
        </div>
      </div>
      <div className="mb-4">
        <p className="p-2 px-3 text-base font-medium">Project Resources</p>
        <div className="text-gray-500">
          <p className="p-2 px-3 font-medium hover:bg-purple-300 hover:text-purple-800 rounded">
            Images
          </p>
          <p className="p-2 px-3 font-medium hover:bg-purple-300 hover:text-purple-800 rounded">
            Resources
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
