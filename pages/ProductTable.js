import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from '../styles/ProductsTable.module.css';

export default function ProductsTable() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=20")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h2>Product List</h2>
      
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchInput}
      />

      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.tableHeaderCell}>Image</th>
            <th className={styles.tableHeaderCell}>Title</th>
            <th className={styles.tableHeaderCell}>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <Link href={`./pages/product/${product.id}`} key={product.id} passHref>
              <tr className={styles.tableRow}>
                <td className={styles.tableCell}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className={styles.image}
                  />
                </td>
                <td className={styles.tableCell}>{product.title}</td>
                <td className={styles.tableCell}>${product.price.toFixed(2)}</td>
              </tr>
            </Link>
          ))}
        </tbody>
      </table>
    </div>
  );
}