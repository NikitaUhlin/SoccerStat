import React from 'react';
import defaultCrest from '../../assets/img/default-crest.png'
import './teamsItem.css'

const TeamItem = ({ teamItem }) => {
    const { name, area: { name: areaName }, founded, venue, crestUrl } = teamItem;
    return (
        <div className="team-card">
            <div className="team_name">{name}</div>
            <div className="team-content">
                <img className="crest-icon" src={crestUrl || defaultCrest} alt='n/a' />
                <div>
                    <div className="team_item"><span>Страна:</span> {areaName}</div>
                    <div className="team_item"><span>Стадион:</span> {venue}</div>
                    <div className="team_item">Основан в {founded} году</div>
                </div>
            </div>
        </div>
    )
}
export default TeamItem;