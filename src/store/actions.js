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
export { competitionLoaded, competitionRequested, teamLoaded, teamRequested };