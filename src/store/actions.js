const competitionLoaded = (newCompetition) => {
    return {
        type: 'COMPETITION_LOADED',
        payload: newCompetition
    }
}
const competitionRequested = () => {
    return {
        type: 'COMPETITION_REQUESTED',
    }
}
const teamLoaded = (newTeam) => {
    return {
        type: 'TEAM_LOADED',
        payload: newTeam
    }
}
const teamRequested = () => {
    return {
        type: 'TEAM_REQUESTED',
    }
}
const teamMatchesLoaded = (newTeamMatches) => {
    return {
        type: 'TEAM_MATCHES_LOADED',
        payload: newTeamMatches
    }
}
const teamMatchesRequested = () => {
    return {
        type: 'TEAM_MATCHES_REQUESTED',
    }
}
const competitionMatchesLoaded = (newCompetitionMatches) => {
    return {
        type: 'COMPETITION_MATCHES_LOADED',
        payload: newCompetitionMatches
    }
}
const competitionMatchesRequested = () => {
    return {
        type: 'COMPETITION_MATCHES_REQUESTED',
    }
}
const teamMatchesError403 = () => {
    return {
        type: 'TEAM_MATCHES_ERROR_403'
    }
}
const competitionMatchesError403 = () => {
    return {
        type: 'COMPETITION_MATCHES_ERROR_403'
    }
}
const clearMatches = () => {
    return {
        type: 'MATCHES_CLEAR'
    }
}
export {
    competitionLoaded,
    competitionRequested,
    teamLoaded,
    teamRequested,
    teamMatchesLoaded,
    teamMatchesRequested,
    competitionMatchesLoaded,
    competitionMatchesRequested,
    competitionMatchesError403,
    teamMatchesError403,
    clearMatches
};