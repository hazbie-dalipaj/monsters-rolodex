import React from 'react';
import './SearchBox.css';

export const SearchBox = ({ placeholder, handleChange }) => {
    return (
        <div>
            <input type = 'search' placeholder = 'search monsters'         
                onChange = { handleChange }
            />
        </div>
    )
}
export default SearchBox;