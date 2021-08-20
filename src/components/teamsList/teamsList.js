import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { teamLoaded, teamRequested } from '../../store/actions';
import API from '../../services/apiService';
import TeamItem from '../teamsItem/teamsItem'
import './teamsList.css'



const TeamsList = ({ teamRequested, teamLoaded, teams }) => {
    useEffect(() => {
        teamRequested();
        API.getTeams()
            .then(res => teamLoaded(res.data));
    }, [])
    return (
        <div className="content_teams-list">
            <div className="teams-list">
                {teams.map(teamItem => {
                    return <TeamItem key={teamItem.id}

                        teamItem={teamItem} />
                })}
            </div>
        </div>
    )
};
const mapStateToProps = (state) => {
    return {
        teams: state.teams,
        loading: state.loading
    }
}
const mapDispatchToProps = {
    teamLoaded,
    teamRequested
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamsList);