import React, { useState } from 'react';
import { FilterProps } from './Filter.interface';
import styles from './Filter.module.scss';

const Filter: React.FC<FilterProps> = ({ categories, onFilter }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (category: string) => {
    onFilter(category);
    setIsOpen(false);
  };

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className={styles.filter}>
      <button
        type="button"
        className={styles.label}
        onClick={toggleDropdown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        Categorías
        <span className={styles.arrowDown}>▼</span>
      </button>

      {isOpen && (
        <ul className={styles.dropdown} role="listbox" aria-label="Categorías">

          {categories.map((category, index) => (
            <li
              key={index}
              role="option"
              className={styles.option}
              onClick={() => handleSelect(category)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleSelect(category);
                }
              }}
            >
              {category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Filter;
