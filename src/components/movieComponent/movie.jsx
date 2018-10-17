import React from 'react'

const Movie = (props) => {
    return (
        <table> 
          <tbody>
            <tr>
                <td>
                    {props.posterpath === null 
                        ? <img width="100" src="Movies-icon.png" alt="No Poster" /> 
                        : <img width="100" src={`https://image.tmdb.org/t/p/w185/${props.posterpath}`} alt="Poster"/>
                    } 
                </td>
                <td>
                    <h3>{props.title}</h3>
                    <p>{props.overview}</p>
                </td>
            </tr>
          </tbody>
        </table>
    )
}

export default Movie