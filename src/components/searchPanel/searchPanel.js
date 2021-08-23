import React, { useState, useEffect } from 'react';
import './searchPanel.css';
import useDebounce from '../../utilities/useDebounce';

const SearchPanel = ({ label, onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 500);
    const onUpdateSearch = (e) => {
        setSearchTerm(e.target.value.toUpperCase())
    };
    useEffect(() => {
        onSearch(debouncedSearchTerm)
    }, [debouncedSearchTerm]);
    return (
        <input
            className="search"
            type="text"
            placeholder={`Поиск ${label}`}
            onChange={onUpdateSearch}
        />
    )
}
export default SearchPanel