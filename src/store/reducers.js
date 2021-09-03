const initialState = {
    competitions: [],
    competitionsCount: 0,
    teams: [],
    teamsCount: 0,
    matches: [],
    competition: {},
    matchesCount: 0,
    loading: true,
    matchesAccessError: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "COMPETITION_LOADED":
            return {
                ...state,
                competitions: action.payload.competitions,
                competitionsCount: action.payload.count,
                loading: false,
            };
        case "COMPETITION_REQUESTED":
            return {
                ...state,
                loading: true,
            };
        case "TEAM_LOADED":
            return {
                ...state,
                teams: action.payload.teams,
                teamsCount: action.payload.count,
                loading: false,
            };
        case "TEAM_REQUESTED":
            return {
                ...state,
                loading: true,
            };
        case "TEAM_MATCHES_LOADED":
            return {
                ...state,
                matches: action.payload.matches,
                matchesCount: action.payload.count,
                matchesAccessError: false,
                loading: false,
            };
        case "TEAM_MATCHES_REQUESTED":
            return {
                ...state,
                matchesAccessError: false,
                loading: true,
            };
        case "COMPETITION_MATCHES_LOADED":
            return {
                ...state,
                matches: action.payload.matches,
                competition: action.payload.competition,
                matchesAccessError: false,
                loading: false,
            };
        case "COMPETITION_MATCHES_REQUESTED":
            return {
                ...state,
                matchesAccessError: false,
                loading: true,
            };
        case "COMPETITION_MATCHES_ERROR_403":
            return {
                ...state,
                matchesAccessError: true,
                loading: false,
            };
        case "MATCHES_CLEAR":
            return {
                ...state,
                matches: [],
                competition: {},
            };
        default:
            return state;
    }
};

export default reducer;
