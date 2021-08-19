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
export { competitionLoaded, competitionRequested };