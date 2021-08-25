import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    clearMatches,
    competitionMatchesLoaded,
    competitionMatchesRequested,
    competitionMatchesError403
} from '../../store/actions';
import API from '../../services/apiService';
import CalendarItem from '../calendarItem/calendarItem';
import Spinner from '../spinner/spinner';
import refereeRed from '../../assets/icons/referee-red.svg'
import './competitionCalendar.css'


const CompetitionCalendar = ({
    competitionMatchesLoaded,
    competitionMatchesRequested,
    competitionMatchesError403,
    matchesAccessError,
    clearMatches,
    matches,
    competition,
    loading
}) => {
    const { id } = useParams();
    useEffect(() => {
        competitionMatchesRequested();
        API.getCompetitionMatches(id)
            .then((res) => {
                competitionMatchesLoaded(res.data)
            })
            .catch((e) => {
                if (e.response.status === 403) {
                    competitionMatchesError403()
                }
            })
        return () => {
            clearMatches()
        }
    }, [])
    const content =
        matchesAccessError ?
            <div>
                <img className="calendarList-errorImg" src={refereeRed} alt="" />
                <div className="calendarList-error">
                    У вас нет доступа к информации о мачах этой лиги
                </div>
                <Link to="/competitions" className="calendarList-errorBack">Назад к списку лиг</Link>
            </div>
            :
            matches.map(calendarItem => (
                <CalendarItem
                    calendarItem={calendarItem}
                    competition={competition}
                    key={calendarItem.id}
                />
            ))
    return (
        <div>
            {competition.name && <div className="calendarList-title" > Календарь матчей лиги {competition.name}</div>}
            <div className="calendarList">
                {loading ? <Spinner /> : content}
            </div>
        </div>

    )
}
const mapStateToProps = (state) => {
    return {
        matches: state.matches,
        competition: state.competition,
        loading: state.loading,
        matchesAccessError: state.matchesAccessError
    }
}
const mapDispatchToProps = {
    competitionMatchesLoaded,
    competitionMatchesRequested,
    competitionMatchesError403,
    clearMatches
};
export default connect(mapStateToProps, mapDispatchToProps)(CompetitionCalendar)