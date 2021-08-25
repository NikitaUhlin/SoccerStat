import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { teamMatchesLoaded, teamMatchesRequested, clearMatches } from '../../store/actions';
import API from '../../services/apiService';
import CalendarItem from '../calendarItem/calendarItem';
import Spinner from '../spinner/spinner';
import refereeYellow from '../../assets/icons/referee-yellow.svg'
import './teamCalendar.css'


const TeamCalendar = ({
    teamMatchesLoaded,
    teamMatchesRequested,
    clearMatches,
    loading,
    matches
}) => {
    const { id } = useParams();
    useEffect(() => {
        teamMatchesRequested();
        API.getTeamMatches(id)
            .then((res) => teamMatchesLoaded(res.data))
        return () => {
            clearMatches()
        }
    }, [])
    let teamName;
    if (matches.length && matches[0].awayTeam.id == id) {
        teamName = matches[0].awayTeam.name
    }
    else if (matches.length) {
        teamName = matches[0].homeTeam.name
    }
    const content = matches.length ?
        matches.map(calendarItem => (
            <CalendarItem
                calendarItem={calendarItem}
                key={calendarItem.id}
            />
        )) :
        <div>
            <img className="calendarList-errorImg" src={refereeYellow} alt="" />
            <div className="calendarList-error">
                Не найдено ни одного матча
            </div>
            <Link to="/teams" className="calendarList-errorBack">Назад к списку команд</Link>
        </div>

    return (
        <div>
            {teamName &&
                <div className="calendarList-title">
                    Календарь матчей команды {teamName}
                </div>
            }
            <div className="calendarList">
                {loading ? <Spinner /> : content}
            </div>
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
    teamMatchesRequested,
    clearMatches
};
export default connect(mapStateToProps, mapDispatchToProps)(TeamCalendar)