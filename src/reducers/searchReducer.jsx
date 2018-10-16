export const searchReducer = (state = {
    title:'',
    apiEndPoint: 'Images',
    images: [],
    films: [],
    imageTypes: [
        'Natuarl',
        'Life',
        'Cute',
        'Happy',
        'Heart',
        'Painting'
    ],
    filmTypes: [
        'Action',
        'Fantasy',
        'Adventure',
        'Comedy',
        'Crime',
        'Drama'
    ]
}, action) => {
    switch(action.type){
        case 'SEARCH_SET_TITLE':
            return{
                ...state,
                title: action.payload
            }
        case 'SEARCH_SET_APIENDPOINT':
            return {
                ...state,
                apiEndPoint: action.payload
            }
        case 'SEARCH_IMAGES_LIST':
            return{
                ...state,
                images: action.payload
            }
        case 'SEARCH_SET_IMAGELIST':
            return {
                ...state,
                images: action.payload
            }
        default:
            return state
    }
}