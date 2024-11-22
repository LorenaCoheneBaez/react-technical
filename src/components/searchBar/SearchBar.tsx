import React from 'react';
import styles from './SearchBar.module.scss';
import { SearchBarProps } from './SearchBar.interface';

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, value, onChange }) => {

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <form className={styles.searchBarContainer}>
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={handleInputChange}
                aria-label="Buscar"
                id="title"
            />
            <span className={styles.searchIcon}>
                <i className="fa fa-search"></i>
            </span>
        </form>
    );
};

export default SearchBar;
