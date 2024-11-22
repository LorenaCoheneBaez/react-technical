import React, { useState, useEffect } from 'react';
import { useProductContext } from '../../context/ProductContext';
import Card from '../../components/card/Card';
import styles from './Home.module.scss';

const Home: React.FC = () => {
  const { allProducts, searchTerm, selectedCategory } = useProductContext();

  const [visibleProducts, setVisibleProducts] = useState<any[]>([]);
  const [cursor, setCursor] = useState<number>(0);
  const [limit] = useState<number>(10);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const loadProducts = () => {
      try {
        let filtered = allProducts;

        if (selectedCategory) {
          filtered = filtered.filter((product) => product.category === selectedCategory);
        }

        if (searchTerm.trim()) {
          filtered = filtered.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
          );
        }

        setCursor(0);
        setVisibleProducts(filtered.slice(0, limit));
        setError('');
      } catch (err) {
        setError('Ha ocurrido un problema al cargar los productos');
      }
    };

    loadProducts();
  }, [allProducts, selectedCategory, searchTerm, limit]);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= documentHeight - 1 && !loading) {
      setLoading(true);
      setCursor((prev) => prev + limit);
    }
  };

  useEffect(() => {
    if (cursor === 0) return;

    const loadMoreProducts = () => {
      try {
        let filtered = allProducts;

        if (selectedCategory) {
          filtered = filtered.filter((product) => product.category === selectedCategory);
        }

        if (searchTerm.trim()) {
          filtered = filtered.filter((product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
          );
        }

        const newProducts = filtered.slice(cursor, cursor + limit);
        setVisibleProducts((prev) => [...prev, ...newProducts]);
        setLoading(false);
        setError('');
      } catch (err) {
        setError('Ha ocurrido un problema al cargar los productos');
      }
    };

    loadMoreProducts();
  }, [cursor, allProducts, selectedCategory, searchTerm, limit]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const noResults = searchTerm.trim() && visibleProducts.length === 0;

  return (
    <section className={styles.home}>

      {error && <div className={styles.errorMessage}>
        <p>{error}</p>
      </div>
      }


      {noResults &&
        <div className={styles.errorMessage}>
          <p>No se encontraron productos para "{searchTerm}"</p>
        </div>
      }

      <div>
        {visibleProducts.map((product: any) => (
          <Card key={product.id} item={product} />
        ))}
      </div>

      {loading && cursor !== 0 && <p>Cargando más productos...</p>}
    </section>
  );
};

export default Home;
