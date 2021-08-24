import React from 'react';
import './teamCalendarItem.css'
import arrowBack from '../../assets/icons/arrow-back.svg'
import { format } from 'date-fns';

const TeamCalendarItem = ({ teamCalendarItem }) => {
    const {
        competition: { name: competitionName },
        status,
        homeTeam: { name: homeTeam },
        awayTeam: { name: awayTeam },
        score:
        { winner,
            fullTime: {
                homeTeam: homeTeamScore,
                awayTeam: awayTeamScore } },
        utcDate
    } = teamCalendarItem;
    const date = status === 'FINISHED' ?
        format(new Date(utcDate), 'dd.MM.yyyy')
        : format(new Date(utcDate), 'HH:mm dd.MM.yyyy')
    const translatedStatus = status === 'FINISHED' ? 'ОКОНЧЕН' : '';
    const renderArrow = <img className="arrowBack" src={arrowBack} alt="<" />
    const homeIcon = winner === 'HOME_TEAM' ? renderArrow : null;
    const awayIcon = winner === 'AWAY_TEAM' ? renderArrow : null
    return (
        <div className="calendarItem">
            <div className="calendarItem-name">{competitionName}</div>
            <div className="calendarItem-total">
                <div className="calendarItem-info">
                    <div className="team-container">
                        <div className={winner === 'HOME_TEAM' ? 'winner' : ''}>{homeTeam}</div>
                        <div className="calendarItem-score">
                            {homeTeamScore}
                            <div className="arrowContainer">{homeIcon}</div>
                        </div>

                    </div>
                    <div className="separatorTeam"></div>
                    <div className="team-container">
                        <div className={winner === 'AWAY_TEAM' ? 'winner' : ''}>{awayTeam}</div>
                        <div className="calendarItem-score">
                            {awayTeamScore}
                            <div className="arrowContainer">{awayIcon}</div>
                        </div>

                    </div>
                </div>
                <div className="calendarItem-data">
                    <div>{translatedStatus}</div>
                    <div>{date}</div>
                </div>
            </div>
        </div >
    )
}
export default TeamCalendarItem