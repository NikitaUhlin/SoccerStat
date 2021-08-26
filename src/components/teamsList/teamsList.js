import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { teamLoaded, teamRequested } from '../../store/actions';
import API from '../../services/apiService';
import TeamItem from '../teamsItem/teamsItem'
import './teamsList.css'
import SearchPanel from '../searchPanel/searchPanel';
import Spinner from '../spinner/spinner';

const TeamsList = ({ teamRequested, teamLoaded, teams, loading }) => {
    const [filteredTeams, setFilteredTeams] = useState(teams);
    const [emptySearch, setEmptySearch] = useState(false);
    const [preloadedSearch, setPreloadedSearch] = useState('');
    useEffect(() => {
        teamRequested();
        API.getTeams()
            .then(res => teamLoaded(res.data));
    }, [])
    useEffect(() => {
        setFilteredTeams(teams);
        if (preloadedSearch.length) {
            onSearch(preloadedSearch);
            setPreloadedSearch('');
        }
    }, [teams])
    const onSearch = (searchTerm) => {
        if (teams.length === 0) {
            setPreloadedSearch(searchTerm)
            return
        }
        if (searchTerm.length) {
            const searchRes = teams.filter((item) => item.name.toLowerCase().includes(searchTerm))
            if (searchRes.length) {
                setFilteredTeams(searchRes);
                setEmptySearch(false);
            }
            else {
                setEmptySearch(true);
            }
        } else {
            setFilteredTeams(teams);
            setEmptySearch(false);
        }

    }
    return (

        <div className="content_teams-list">
            <SearchPanel
                label="команд"
                onSearch={onSearch}
                initialValue={window.location.search.replace('?q=', '')}
            />
            {loading ? <Spinner /> :
                <div className="teams-list">
                    {emptySearch ? <tr><td>Ничего не найдено...</td></tr> :
                        filteredTeams.map(teamItem => (<TeamItem key={teamItem.id} teamItem={teamItem} />
                        ))}
                </div>
            }
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