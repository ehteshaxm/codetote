import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import ContentPage from "./screens/ContentPage";
import LandingPage from "./screens/LandingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/resource/:id" element={<ContentPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
