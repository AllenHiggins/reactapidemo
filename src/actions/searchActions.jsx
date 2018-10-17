import axios from 'axios'

export const setSearchTitle = (title) => {
    return {
        type: 'SEARCH_SET_TITLE',
        payload: title
    }
}

export const setApiEndPiont = (choice) => {
    return {
        type: 'SEARCH_SET_APIENDPOINT',
        payload: choice
    }
}


export const searchGetImagesList = (title) => {
    return(dispatch) => {
        
        const apiUrl = 'https://pixabay.com/api'
        const apiKey = '10361802-d80edd7c8013de8fa58524476'

        axios.get(`${apiUrl}/?key=${apiKey}&q=${title}&image_type=photo&per_page=20&safesearch=true`)
        .then( res => {
            dispatch({
                type: 'SEARCH_IMAGES_LIST',
                payload:res.data.hits
            })
        })
        .catch( err => console.log(err))

    }
}

export const filmGetListByTitle = (title) => {
    return (dispatch) => {

        const key = 'ad15983bd210a7516df5735e5abb5f4f'
        const URL = `https://api.themoviedb.org/3/search/movie?query=${title}&api_key=${key}`
        
        axios.get(URL)
        .then( res => {
              dispatch({
                type:'SEARCH_FILM_LIST',
                payload: res.data.results
            })
        })
        .catch( error => {console.log(error)})   
    }
}

