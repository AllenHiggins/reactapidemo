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

export const searchSetImagesList = (val) => {
    return {
        type: 'SEARCH_SET_IMAGELIST',
        payload: val
    }
}

export const searchGetImagesList = (userInput) => {
    return(dispatch) => {
        
        const apiUrl = 'https://pixabay.com/api'
        const apiKey = '10361802-d80edd7c8013de8fa58524476'

        axios.get(`${apiUrl}/?key=${apiKey}&q=${userInput}&image_type=photo&per_page=20&safesearch=true`)
        .then( res => {
            dispatch({
                type: 'SEARCH_IMAGES_LIST',
                payload:res.data.hits
            })
        })
        .catch( err => console.log(err))

    }
}
