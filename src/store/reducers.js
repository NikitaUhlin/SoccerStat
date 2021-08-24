const initialState = {
    competitions: [],
    competitionsCount: 0,
    teams: [],
    teamsCount: 0,
    matches: [],
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
        case 'TEAM_LOADED':
            return {
                ...state,
                teams: action.payload.teams,
                teamsCount: action.payload.count,
                loading: false
            };
        case 'TEAM_REQUESTED':
            return {
                ...state,
                loading: true
            };
        case 'TEAM_MATCHES_LOADED':
            return {
                ...state,
                matches: action.payload.matches,
                loading: false
            };
        case 'TEAM_MATCHES_REQUESTED':
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}

export default reducer;