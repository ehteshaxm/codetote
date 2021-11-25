import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import FrontendScreen from "./screens/FrontendScreen";
import HtmlCssScreen from "./screens/HtmlCssScreen";

const App = () => {
  return (
    <BrowserRouter>
      <div className="mx-auto py-5" style={{ width: "1400px" }}>
        <div className="grid grid-cols-6 gap-4 mb-8">
          <div className="font-black text-4xl flex align-middle pl-2 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-purple-600 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                clipRule="evenodd"
              />
            </svg>
            <p>codetote</p>
          </div>
          <div className="col-start-2 col-end-7 px-2 border-b border-gray-300 text-gray-400 flex flex-row-reverse items-center">
            <a
              href="https://twitter.com/codetote"
              className="flex items-center hover:text-blue-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <p className="text-xl">codetote</p>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4">
          <Navbar />
          <div className="grid-span-5">
            <Routes>
              <Route path="/htmlcss" exact element={HtmlCssScreen} />
              <Route path="/frontend" exact element={FrontendScreen} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
