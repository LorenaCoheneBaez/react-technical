import React from 'react';
import SearchBar from '../searchBar/SearchBar';
import Filter from '../filter/Filter';
import { useProductContext } from '../../context/ProductContext';
import styles from './Header.module.scss';

const Header: React.FC = () => {
    const { searchTerm, setSearchTerm, setSelectedCategory, allProducts } = useProductContext();

    const categories = [...new Set(allProducts.map((product) => product.category))];

    return (
        <header className={styles.header}>

            <SearchBar
                placeholder="Buscar por título..."
                value={searchTerm}
                onChange={setSearchTerm}
            />
            <Filter
                categories={categories}
                onFilter={setSelectedCategory}
            />
        </header>
    );
};

export default Header;
