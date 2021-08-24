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
export { competitionLoaded, competitionRequested, teamLoaded, teamRequested, teamMatchesLoaded, teamMatchesRequested };