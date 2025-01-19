// import React, { StrictMode } from 'react'
import BagroundPage from './components/BagroundPage'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import  Routes from './components/Routes'
import Page1 from './components/Page1';
import Carriculum from './components/Carriculum';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import BookDemo from './components/page1Components/BookDemo';

const App = () => {
  return (

        <div className='w-auto h-auto flex flex-wrap'>
          <BagroundPage/>
          
        </div>


  )
}

export default App
