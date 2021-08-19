import axios from "axios";
class ApiService {

    constructor() {
        this.api = axios.create({
            baseURL: 'https://api.football-data.org/v2/',
            headers: { 'X-Auth-Token': '8c7238921ae4420db5002ac6a4bbca4f' }
        });
        // this._apiBase = 'https://api.football-data.org/v2/'
        // this._apiCompetitionsBase = 'https://api.football-data.org/v2/competitions?areas=2077';
        // this._apiTeamsBase = 'https://api.football-data.org/v2/teams/'
    }

    getCompetitions() {
        return this.api.get('competitions?areas=2077')
    }
}


const API = new ApiService()

export default API
