import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Col from './Col';
import Detail from './Detail';

const Page = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Col />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
};

export default Page;
