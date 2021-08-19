import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { competitionLoaded, competitionRequested } from '../../store/actions'
import API from '../../services/apiService'



const CompetitionsList = (props) => {
    useEffect(() => {
        props.competitionRequested();
        API.getCompetitions()
            .then(res => props.competitionLoaded(res.data));
    }, [])
    console.log(props)
    return (
        <div>
            {props.competitions.length}
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