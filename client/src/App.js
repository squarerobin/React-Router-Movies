import React, { useState } from 'react';

import { Route } from 'react-router-dom'
import Movie from "./Movies/Movie"
import MovieList from "./Movies/MovieList"
import SavedList from "./Movies/SavedList"
import movie from "./Movies/Movie"

const App = (props) => {
  const [savedList, setSavedList] = useState();
  const { title, director, metascore, stars } = {movie};



  return (
    <div>
      <SavedList list={savedList} />
  
      
      <Route exact path='/' component={MovieList} />
      <Route path='/movies/:id' component={Movie} />


    </div>
  );
};

export default App;
