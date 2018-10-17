import React from 'react'

import MovieList from '../movieComponent/movieList'
import './film.css'

const Films = (props) => {
    const { filmlist } =  props 
   
    return (
      <div className="Films">
        <MovieList filmlist={filmlist}/>
      </div>
    );
}

export default Films;