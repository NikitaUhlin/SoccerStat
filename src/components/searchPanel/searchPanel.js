import React, { useState, useEffect } from 'react';
import './searchPanel.css';
import useDebounce from '../../utilities/useDebounce';
import { useHistory, useLocation } from 'react-router-dom';

const SearchPanel = ({ label, onSearch, initialValue }) => {
    const history = useHistory();
    const location = useLocation();
    const [searchTerm, setSearchTerm] = useState(initialValue);
    const [value, setValue] = useState(initialValue);
    const debouncedSearchTerm = useDebounce(searchTerm, 500);
    const onUpdateSearch = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
        setValue(e.target.value)
    };
    useEffect(() => {
        onSearch(debouncedSearchTerm);
        if (debouncedSearchTerm.length) {
            history.replace(`${location.pathname}?q=${debouncedSearchTerm}`, { from: "SearchPanel" })
        }
        else { history.replace(`${location.pathname}`, { from: "SearchPanel" }) }
    }, [debouncedSearchTerm]);
    useEffect(() => {
        console.log(initialValue)
        setValue(initialValue)
    }, [initialValue])
    return (
        <input
            className="search"
            type="text"
            placeholder={`Поиск ${label}`}
            onChange={onUpdateSearch}
            value={value}
        />
    )
}
export default SearchPanel