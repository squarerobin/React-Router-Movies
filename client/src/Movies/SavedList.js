import React, {useState} from 'react';
import {Link} from 'react-router-dom'




const SavedList = props => {

  const [list] = useState([])
  
  console.log(props.list)
  
  return (
  



  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <Link className="home-button" to='/'>Home</Link>
  </div>
)
    };


export default SavedList;
