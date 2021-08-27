import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { DatePicker } from 'antd';
import './filterMatches.css'

const { RangePicker } = DatePicker;

const FilterMatches = ({ onCalendarFilter, initialFilterValue }) => {
    const history = useHistory();
    const location = useLocation();

    const onChange = (range, stringsRange) => {
        onCalendarFilter(range);
        if (range) {
            history.replace(`${location.pathname}?filter=range${stringsRange[0]}to${stringsRange[1]}`, { from: "FilterMatches" })
        }
        else { history.replace(`${location.pathname}`, { from: "FilterMatches" }) }

    }
    return (
        <>
            <div className="range-label">Сортировка по дате:</div>
            <RangePicker
                onCalendarChange={onChange}
                format="DD.MM.YYYY"
                placeholder={["Фильтр с", "Фильтр по"]}
                defaultValue={initialFilterValue}
            />
        </>
    )

}

export default FilterMatches;