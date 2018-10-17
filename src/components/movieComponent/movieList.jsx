import React from 'react'
import Movie from './movie'

const MovieList = (props) => {
    
    const { filmlist } = props
    let count = 0
    return ( 
        filmlist.map( film => {    
            return (
                <div key={film.id}>
                    <Movie 
                        count={count}
                        title={film.title}
                        posterpath={film.poster_path}
                        overview= {film.overview}/>
                    <hr />
                </div>
            )
        })
    )
}

export default MovieList;