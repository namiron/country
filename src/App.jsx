import React, { useState, useEffect } from 'react';
import './App.scss'
import Header from './components/header/Header';
import Main from './pages/Main';
import Footer from './components/footer/Footer';
import HomePage from './pages/HomePage';
import Details from './pages/Details';
import NotFound from './pages/NotFound';
import { Route, Routes } from 'react-router-dom'

const App = () => {
  const [countries, setCountries] = useState([]);
  return (
    <>
      <div className="wrapper">
        <Header />
        <main className="main">
          <Main>
            <Routes>
              <Route path='/country/' element={<HomePage countries={countries} setCountries={setCountries} />} />
              <Route path='/country/:name' element={<Details />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Main>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;


