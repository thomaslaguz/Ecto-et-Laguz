import React from 'react';
import logo from './logo.svg';
import Button from '../../component/button';

function Home() {
  return (
  <div>
    <h1>This is a base example</h1>
    <img src={logo} />
    <Button />
  </div>
  );
}

export default Home;
