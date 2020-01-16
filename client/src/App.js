import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import { Route } from 'react-router-dom'
import Movie from "./Movies/Movie"
import MovieList from "./Movies/MovieList"

const App = () => {
  const [savedList] = useState( [] );

/*   const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  }; */

  return (
    <div>
      <SavedList list={savedList} />
      
      <Route exact path='/' component={MovieList} />
      <Route   path='/movies/:id' component={Movie} />


    </div>
  );
};

export default App;
