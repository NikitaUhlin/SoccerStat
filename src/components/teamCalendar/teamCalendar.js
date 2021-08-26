import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { teamMatchesLoaded, teamMatchesRequested, clearMatches } from '../../store/actions';
import API from '../../services/apiService';
import CalendarItem from '../calendarItem/calendarItem';
import Spinner from '../spinner/spinner';
import refereeYellow from '../../assets/icons/referee-yellow.svg'
import './teamCalendar.css'
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;


const TeamCalendar = ({
    teamMatchesLoaded,
    teamMatchesRequested,
    clearMatches,
    loading,
    matches
}) => {
    const [filteredMatches, setFilteredMatches] = useState([]);
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
    const content = matches.length ?
        filteredMatches.map(calendarItem => (
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
                <>
                    <div className="calendarList-title">
                        Календарь матчей команды {teamName}
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
        loading: state.loading
    }
}
const mapDispatchToProps = {
    teamMatchesLoaded,
    teamMatchesRequested,
    clearMatches
};
export default connect(mapStateToProps, mapDispatchToProps)(TeamCalendar)