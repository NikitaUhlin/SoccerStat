import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import {
    clearMatches,
    competitionMatchesLoaded,
    competitionMatchesRequested,
    competitionMatchesError403,
} from "../../store/actions";
import API from "../../services/apiService";
import CalendarItem from "../calendarItem/calendarItem";
import Spinner from "../spinner/spinner";
import refereeRed from "../../assets/icons/referee-red.svg";
import refereeYellow from "../../assets/icons/referee-yellow.svg";
import FilterMatches from "../filterMatches/filterMatches";
import getQueryFilter from "../../utilities/getQueryFilter";

const CompetitionCalendar = ({
    competitionMatchesLoaded,
    competitionMatchesRequested,
    competitionMatchesError403,
    matchesAccessError,
    clearMatches,
    matches,
    competition,
    loading,
}) => {
    const location = useLocation();
    const [filteredMatches, setFilteredMatches] = useState([]);
    const [preloadedSearch, setPreloadedSearch] = useState([]);
    const [isMatchesLoaded, setIsMatchesLoaded] = useState(false);
    const { id } = useParams();
    useEffect(() => {
        competitionMatchesRequested();
        API.getCompetitionMatches(id)
            .then((res) => {
                competitionMatchesLoaded(res.data);
            })
            .catch((e) => {
                if (e.response.status === 403) {
                    competitionMatchesError403();
                }
            });
        const queryFilter = getQueryFilter(location);
        if (queryFilter) {
            setPreloadedSearch(queryFilter);
        }
        return () => {
            clearMatches();
        };
    }, []);
    useEffect(() => {
        if (!loading) {
            setFilteredMatches(matches);
            setIsMatchesLoaded(true);
        }
        if (preloadedSearch.length) {
            onCalendarFilter(preloadedSearch);
        }
    }, [matches]);
    const onCalendarFilter = (range) => {
        if (!range) {
            setFilteredMatches(matches);
            return;
        }
        if (range[0] && range[1]) {
            const startDate = range[0];
            const endDate = range[1];
            setFilteredMatches(
                matches.filter((item) => {
                    const matchDate = new Date(item.utcDate).getTime();
                    if (matchDate <= endDate && matchDate >= startDate) {
                        return true;
                    }
                    return false;
                })
            );
        }
    };
    let content;
    if (matchesAccessError) {
        content = (
            <div>
                <img className="calendarList-errorImg" src={refereeRed} alt="" />
                <div className="calendarList-error">
                    ?? ?????? ?????? ?????????????? ?? ???????????????????? ?? ???????????? ???????? ????????
                </div>
                <Link to="/competitions" className="calendarList-errorBack">
                    ?????????? ?? ???????????? ??????
                </Link>
            </div>
        );
    } else if (filteredMatches.length) {
        content = filteredMatches.map((calendarItem) => (
            <CalendarItem
                calendarItem={calendarItem}
                competition={competition}
                key={calendarItem.id}
            />
        ));
    } else {
        content = (
            <div>
                <img className="calendarList-errorImg" src={refereeYellow} alt="" />
                <div className="calendarList-error">
                    ???? ?????????????? ???? ???????????? ??????????, ???????????????????? ???????????????? ?????????????? ????????????
                </div>
            </div>
        );
    }

    return (
        <div>
            {competition.name && (
                <>
                    <div className="calendarList-title">
                        ?????????????????? ???????????? ???????? {competition.name}
                    </div>
                    <FilterMatches
                        onCalendarFilter={onCalendarFilter}
                        initialFilterValue={preloadedSearch}
                    />
                </>
            )}
            <div className="calendarList">
                {loading || !isMatchesLoaded ? <Spinner /> : content}
            </div>
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
        matches: state.matches,
        competition: state.competition,
        loading: state.loading,
        matchesAccessError: state.matchesAccessError,
    };
};
const mapDispatchToProps = {
    competitionMatchesLoaded,
    competitionMatchesRequested,
    competitionMatchesError403,
    clearMatches,
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CompetitionCalendar);
