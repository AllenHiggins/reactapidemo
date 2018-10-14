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
