import React, { useState } from 'react';
import SiteEntry from "../components/SiteEntry";

const Home = () => {
  return (
    <div className="container">
      <h1 id="welcome">Ready to get focused?</h1>
      <SiteEntry />
    </div>
  );
};

export default Home;
