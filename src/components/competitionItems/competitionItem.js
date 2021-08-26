import React from 'react';
import { useHistory } from 'react-router-dom';
import './competitionItem.css';

const CompetitionItem = ({ competitionItem }) => {
    const history = useHistory();
    const { name, area: { name: areaName }, plan, area: { ensignUrl }, id } = competitionItem;
    let formattedPlan;
    switch (plan) {
        case 'TIER_ONE':
            formattedPlan = 'Высший дивизион'
            break
        case 'TIER_TWO':
            formattedPlan = 'Первый дивизион'
            break
        case 'TIER_THREE':
            formattedPlan = 'Второй дивизион'
            break
        case 'TIER_FOUR':
            formattedPlan = 'Третий дивизион'
            break
        default:
            formattedPlan = plan;
    }
    return (
        <tr
            className="content"
            onClick={() => history.push(`/competitions/${id}`, { from: "CompetitionItem" })}
        >
            <td className="content-td competition_name">{name}</td>
            <td className="content-td">
                <div className="competition_area">
                    <img className="area-icon" src={ensignUrl} alt="N/A" />
                    <div className="area-name">{areaName}</div>
                </div>
            </td>
            <td className="content-td">{formattedPlan}</td>
        </tr>
    )
}
export default CompetitionItem