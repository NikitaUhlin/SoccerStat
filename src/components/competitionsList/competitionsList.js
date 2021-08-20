import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { competitionLoaded, competitionRequested } from '../../store/actions';
import API from '../../services/apiService';
import CompetitionItem from '../competitionItems/competitionItem'
import './competitionsList.css'



const CompetitionsList = ({ competitionRequested, competitionLoaded, competitions }) => {
    useEffect(() => {
        competitionRequested();
        API.getCompetitions()
            .then(res => competitionLoaded(res.data));
    }, [])
    return (
        <div className="content_competitions-list">
            <table className="competitions-list">
                {competitions.map(competitionItem => {
                    return <CompetitionItem key={competitionItem.id}

                        competitionItem={competitionItem} />
                })}
            </table>
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