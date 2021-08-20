
import './competitionItem.css';

const CompetitionItem = ({ competitionItem }) => {
    const { name, area: { name: areaName }, plan, area: { ensignUrl } } = competitionItem;
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
        <tr className="content">
            <td className="content-td competition_name">{name}</td>
            <td className="content-td competition_area">
                <img className="area-icon" src={ensignUrl} alt="N/A" />
                <div className="area-name">{areaName}</div>
            </td>
            <td className="content-td">{formattedPlan}</td>
        </tr>
    )
}
export default CompetitionItem