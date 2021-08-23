import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { competitionLoaded, competitionRequested } from '../../store/actions';
import API from '../../services/apiService';
import CompetitionItem from '../competitionItems/competitionItem'
import './competitionsList.css'
import SearchPanel from '../searchPanel/searchPanel';
import Spinner from '../spinner/spinner';



const CompetitionsList = ({ competitionRequested, competitionLoaded, competitions, loading }) => {
    const [filteredCompetitions, setFilteredCompetitions] = useState(competitions);
    const [emptySearch, setEmptySearch] = useState(false);
    useEffect(() => {
        competitionRequested();
        API.getCompetitions()
            .then(res => competitionLoaded(res.data));
    }, [])
    useEffect(() => {
        setFilteredCompetitions(competitions);
    }, [competitions])
    const onSearch = (searchTerm) => {
        if (competitions.length === 0) {
            return
        }
        if (searchTerm.length) {
            const searchRes = competitions.filter((item) => item.name.toUpperCase().includes(searchTerm))
            if (searchRes.length) {
                setFilteredCompetitions(searchRes);
                setEmptySearch(false);
            }
            else {
                setEmptySearch(true);
            }
        } else {
            setFilteredCompetitions(competitions);
            setEmptySearch(false);
        }

    }
    return (
        <div className="content_competitions-list">
            <SearchPanel
                label="лиг"
                onSearch={onSearch}
            />
            {loading ? <Spinner /> :
                <table className="competitions-list">
                    {emptySearch ? <tr><td>Ничего не найдено...</td></tr> :
                        filteredCompetitions.map(competitionItem => {
                            return <CompetitionItem key={competitionItem.id}
                                competitionItem={competitionItem} />
                        })}
                </table>
            }
        </div>
    )
};
const mapStateToProps = (state) => {
    return {
        competitions: state.competitions,
        loading: state.loading
    }
}
const mapDispatchToProps = {
    competitionLoaded,
    competitionRequested
};

export default connect(mapStateToProps, mapDispatchToProps)(CompetitionsList);