import React, { StrictMode } from 'react';  // Combine React imports into a single line
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Correct import for react-router components

import App from "./App";
import Header from "./header";  // Ensure the filename case is correct
import About from "./About";  // Assuming you have an About component
import Data from "./Data";  // Assuming you have a Data component
import Chat from "./chat"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);  // Using the new root API from React 18

root.render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/data" element={<Data />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  </StrictMode>
);
