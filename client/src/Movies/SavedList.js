import React, {useState} from 'react';
import {Link} from 'react-router-dom'




const SavedList = props => {

  const [savedList, setSavedList] = useState( [{}] );
  
  //console.log("this is props list: ", props.list)
  console.log("list is: ", savedList)
  const addToSavedList = () => {
    setSavedList( [...savedList], props.movie );
  }; 
  return (
  


  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {savedList.map(movie => (
      <span key="movie.id" className="saved-movie">{movie.title}</span>
    ))}
    <Link className="home-button" to='/'>Home</Link>
  </div>
)

};

  
export default SavedList;
