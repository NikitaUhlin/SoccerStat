import React, { useEffect, useState } from 'react';
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
import refereeRed from '../../assets/icons/referee-red.svg';
import './competitionCalendar.css'
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

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
    const [filteredMatches, setFilteredMatches] = useState([]);
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
    useEffect(() => {
        setFilteredMatches(matches)
    }, [matches])
    const onCalendarFilter = (range) => {
        if (!range) {
            setFilteredMatches(matches)
            return
        }
        if (range[0] && range[1]) {
            const startDate = range[0];
            const endDate = range[1];
            setFilteredMatches(matches.filter((item) => {
                const matchDate = new Date(item.utcDate).getTime()
                console.log(startDate);
                console.log(matchDate);
                console.log(endDate);
                if (matchDate <= endDate && matchDate >= startDate) {
                    return true
                }
                return false
            }))
        }
    }
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
            filteredMatches.map(calendarItem => (
                <CalendarItem
                    calendarItem={calendarItem}
                    competition={competition}
                    key={calendarItem.id}
                />
            ))
    return (
        <div>
            {competition.name &&
                <>
                    <div className="calendarList-title">
                        Календарь матчей лиги {competition.name}
                    </div>
                    <RangePicker
                        onCalendarChange={onCalendarFilter}
                        format="DD.MM.YYYY"
                        placeholder={["Фильтр с", "Фильтр по"]}
                    />
                </>
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