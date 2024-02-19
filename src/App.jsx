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
              <Route path='/' element={<HomePage countries={countries} setCountries={setCountries} />} />
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


// 0
// : 
// altSpellings
// : 
// (6) ['CY', 'Kýpros', 'Kıbrıs', 'Republic of Cyprus', 'Κυπριακή Δημοκρατία', 'Kıbrıs Cumhuriyeti']
// area
// : 
// 9251
// capital
// : 
// ['Nicosia']
// capitalInfo
// : 
// {latlng: Array(2)}
// car
// : 
// {signs: Array(1), side: 'left'}
// cca2
// : 
// "CY"
// cca3
// : 
// "CYP"
// ccn3
// : 
// "196"
// cioc
// : 
// "CYP"
// coatOfArms
// : 
// {png: 'https://mainfacts.com/media/images/coats_of_arms/cy.png', svg: 'https://mainfacts.com/media/images/coats_of_arms/cy.svg'}
// continents
// : 
// ['Europe']
// currencies
// : 
// {EUR: {…}}
// demonyms
// : 
// {eng: {…}, fra: {…}}
// fifa
// : 
// "CYP"
// flag
// : 
// "🇨🇾"
// flags
// : 
// {png: 'https://flagcdn.com/w320/cy.png', svg: 'https://flagcdn.com/cy.svg', alt: 'The flag of Cyprus has a white field, at the cente…ove two green olive branches crossed at the stem.'}
// gini
// : 
// {2018: 32.7}
// idd
// : 
// {root: '+3', suffixes: Array(1)}
// independent
// : 
// true
// landlocked
// : 
// false
// languages
// : 
// {ell: 'Greek', tur: 'Turkish'}
// latlng
// : 
// (2) [35, 33]
// maps
// : 
// {googleMaps: 'https://goo.gl/maps/77hPBRdLid8yD5Bm7', openStreetMaps: 'https://www.openstreetmap.org/relation/307787'}
// name
// : 
// {common: 'Cyprus', official: 'Republic of Cyprus', nativeName: {…}}
// population
// : 
// 1207361
// postalCode
// : 
// {format: '####', regex: '^(\\d{4})$'}
// region
// : 
// "Europe"
// startOfWeek
// : 
// "monday"
// status
// : 
// "officially-assigned"
// subregion
// : 
// "Southern Europe"
// timezones
// : 
// ['UTC+02:00']
// tld
// : 
// ['.cy']
// translations
// : 
// ara
// : 
// {official: 'جمهورية قبرص', common: 'قبرص'}
// bre
// : 
// {official: 'Republik Kiprenez', common: 'Kiprenez'}
// ces
// : 
// {official: 'Kyperská republika', common: 'Kypr'}
// cym
// : 
// {official: 'Gweriniaeth Cyprus', common: 'Cyprus'}
// deu
// : 
// {official: 'Republik Zypern', common: 'Zypern'}
// est
// : 
// {official: 'Küprose Vabariik', common: 'Küpros'}
// fin
// : 
// {official: 'Kyproksen tasavalta', common: 'Kypros'}
// fra
// : 
// {official: 'République de Chypre', common: 'Chypre'}
// hrv
// : 
// {official: 'Republika Cipar', common: 'Cipar'}
// hun
// : 
// {official: 'Ciprusi Köztársaság', common: 'Ciprus'}
// ita
// : 
// {official: 'Repubblica di Cipro', common: 'Cipro'}
// jpn
// : 
// {official: 'キプロス共和国', common: 'キプロス'}
// kor
// : 
// {official: '키프로스 공화국', common: '키프로스'}
// nld
// : 
// {official: 'Republiek Cyprus', common: 'Cyprus'}
// per
// : 
// {official: 'جمهوری قبرس', common: 'قِبرِس'}
// pol
// : 
// {official: 'Republika Cypryjska', common: 'Cypr'}
// por
// : 
// {official: 'República de Chipre', common: 'Chipre'}
// rus
// : 
// {official: 'Республика Кипр', common: 'Кипр'}
// slk
// : 
// {official: 'Cyperská republika', common: 'Cyprus'}
// spa
// : 
// {official: 'República de Chipre', common: 'Chipre'}
// srp
// : 
// {official: 'Кипарска Република', common: 'Кипар'}
// swe
// : 
// {official: 'Republiken Cypern', common: 'Cypern'}
// tur
// : 
// {official: 'Kıbrıs Cumhuriyeti', common: 'Kıbrıs'}
// urd
// : 
// {official: 'جمہوریہ قبرص', common: 'قبرص'}
// zho
// : 
// {official: '塞浦路斯共和国', common: '塞浦路斯'}
// [[Prototype]]
// : 
// Object
// unMember
// : 
// true