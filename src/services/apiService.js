import axios from "axios";
class ApiService {

    constructor() {
        this.api = axios.create({
            baseURL: 'https://api.football-data.org/v2/',
            headers: { 'X-Auth-Token': process.env.REACT_APP_API_KEY }
        });
    }

    getCompetitions() {
        return this.api.get('competitions?areas=2077')
    }

    getTeams() {
        return this.api.get('teams?areas=2077')
    }
    getTeamMatches(id) {
        return this.api.get(`teams/${id}/matches/`)
    }
}

const API = new ApiService()

export default API
