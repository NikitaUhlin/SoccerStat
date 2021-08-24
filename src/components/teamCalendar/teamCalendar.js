import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { teamMatchesLoaded, teamMatchesRequested } from '../../store/actions';
import API from '../../services/apiService';
import TeamCalendarItem from '../teamCalendarItem/teamCalendarItem';
import './teamCalendar.css'


const TeamCalendar = ({ teamMatchesLoaded, teamMatchesRequested, matches }) => {
    const { id } = useParams();
    useEffect(() => {
        teamMatchesRequested();
        API.getTeamMatches(id)
            .then((res) => teamMatchesLoaded(res.data))
    }, [])

    return (
        <div className="calendarList">
            {matches.map(teamCalendarItem => (
                <TeamCalendarItem
                    teamCalendarItem={teamCalendarItem}
                    key={teamCalendarItem.id}
                />
            ))}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        matches: state.matches,
        loading: state.loading
    }
}
const mapDispatchToProps = {
    teamMatchesLoaded,
    teamMatchesRequested
};
export default connect(mapStateToProps, mapDispatchToProps)(TeamCalendar)