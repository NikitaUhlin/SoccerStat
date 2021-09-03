import React from "react";
import { useHistory } from "react-router-dom";
import defaultCrest from "../../assets/img/default-crest.png";
import "./teamsItem.css";

const TeamItem = ({ teamItem }) => {
    const history = useHistory();
    const {
        name,
        area: { name: areaName },
        founded,
        venue,
        crestUrl,
        id,
    } = teamItem;
    return (
        <div
            className="team-card"
            onClick={() => history.push(`/teams/${id}`, { from: "TeamItem" })}
        >
            <div className="team_name">{name}</div>
            <div className="team-content">
                <img className="crest-icon" src={crestUrl || defaultCrest} alt="n/a" />
                <div>
                    <div className="team_item">
                        <span>Страна:</span> {areaName}
                    </div>
                    <div className="team_item">
                        <span>Стадион:</span> {venue}
                    </div>
                    <div className="team_item">Основан в {founded} году</div>
                </div>
            </div>
        </div>
    );
};
export default TeamItem;
