const initialState = {
    competitions: [],
    competitionsCount: 0,
    loading: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'COMPETITION_LOADED':
            return {
                ...state,
                competitions: action.payload.competitions,
                competitionsCount: action.payload.count,
                loading: false
            };
        case 'COMPETITION_REQUESTED':
            return {
                ...state,
                loading: true
            };

        default:
            return state;
    }
}

export default reducer;