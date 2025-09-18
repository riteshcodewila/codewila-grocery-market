import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Dummy pages (example ke liye)
// const Home = () => <h1>Home Page</h1>;
// const About = () => <h1>About Page</h1>;
// const Contact = () => <h1>Contact Page</h1>;

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
    </>
  );
};

export default App;
