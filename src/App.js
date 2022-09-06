import React from 'react';
import {Routes,Route } from 'react-router-dom';
import MovieSummary from './Movie/MovieSummary';
import MovieDetails from './Movie/MovieDetails';
import './App.css';


function App() {

  return (
        <Routes>
        <Route exact path={'/'} element={<MovieDetails/>}/>
          <Route exact path={'/MovieSummary'} element={<MovieSummary/>} />
        </Routes>
  );
}

export default App;

