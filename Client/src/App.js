import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Dashboard/Home';
import { SignIn } from './components/SignIn/SignIn';
import { SignUp } from './components/SignUp/SignUp';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='/UdashBoard' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
