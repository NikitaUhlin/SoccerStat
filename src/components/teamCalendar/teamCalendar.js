import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { teamMatchesLoaded, teamMatchesRequested, clearMatches } from '../../store/actions';
import API from '../../services/apiService';
import CalendarItem from '../calendarItem/calendarItem';
import Spinner from '../spinner/spinner';
import refereeYellow from '../../assets/icons/referee-yellow.svg';
import './teamCalendar.css';
import FilterMatches from '../filterMatches/filterMatches';
import getQueryFilter from '../../utilities/getQueryFilter';


const TeamCalendar = ({
    teamMatchesLoaded,
    teamMatchesRequested,
    clearMatches,
    loading,
    matches
}) => {
    const location = useLocation();
    const [filteredMatches, setFilteredMatches] = useState([]);
    const [preloadedSearch, setPreloadedSearch] = useState([]);
    const [isMatchesLoaded, setIsMatchesLoaded] = useState(false);
    const { id } = useParams();
    useEffect(() => {
        teamMatchesRequested();
        API.getTeamMatches(id)
            .then((res) => teamMatchesLoaded(res.data))
        const queryFilter = getQueryFilter(location)
        if (queryFilter) {
            setPreloadedSearch(queryFilter)
        }
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
        if (!loading) {
            setFilteredMatches(matches)
            setIsMatchesLoaded(true)
        }
        if (preloadedSearch.length) {
            onCalendarFilter(preloadedSearch)
        }
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
                if (matchDate <= endDate && matchDate >= startDate) {
                    return true
                }
                return false
            }))
        }
    }
    let content;
    if (matches.length) {
        if (filteredMatches.length) {
            content = filteredMatches.map(calendarItem => (
                <CalendarItem
                    calendarItem={calendarItem}
                    key={calendarItem.id}
                />
            ))
        }
        else {
            content =
                <div>
                    <img className="calendarList-errorImg" src={refereeYellow} alt="" />
                    <div className="calendarList-error">
                        Не найдено ни одного матча, попробуйте изменить условия поиска
                    </div>
                </div>
        }
    }
    else {
        content =
            <div>
                <img className="calendarList-errorImg" src={refereeYellow} alt="" />
                <div className="calendarList-error">
                    Не найдено ни одного матча
                </div>
                <Link to="/teams" className="calendarList-errorBack">Назад к списку команд</Link>
            </div>
    }

    return (
        <div>
            {teamName &&
                <>
                    <div className="calendarList-title">
                        Календарь матчей команды {teamName}
                    </div>
                    <FilterMatches
                        onCalendarFilter={onCalendarFilter}
                        initialFilterValue={preloadedSearch}
                    />
                </>
            }
            <div className="calendarList">
                {loading || !isMatchesLoaded ? <Spinner /> : content}
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