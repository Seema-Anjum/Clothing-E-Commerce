import React, { useEffect, useState } from "react";
import api from "../api";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";
import Filters from "../components/Filters";
import "../styles/store.css";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Filters
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [size, setSize] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  // navigate
  const navigate = useNavigate();


  const loadProducts = async () => {
    try {
      const res = await api.get("/api/products",  {
        params: { search, category, size, minPrice, maxPrice, page, limit: 10 },
      });
      
      console.log("Products fetched:", res.data);
      setProducts(res.data.products || []);
      setTotalPages(res.data.totalPages);
    } catch (err) {
      console.error(err);
      alert("Failed to load products");
    }
  };
  useEffect(() => {
    loadProducts();
  }, [page]);

  const applyFilters = () => {
    setPage(1); // Reset to first page
    loadProducts();
  };

  
  if (products.length === 0) return <p>No Item Found</p>;

   return (
    <div>
      <Filters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        size={size}
        setSize={setSize}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        applyFilters={applyFilters}
      />

      {/* Product List */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {products.map((p) => (
          <ProductCard
            key={p._id}
            product={p}
            onClick={() => navigate(`/products/${p._id}`)}
          />
          ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage((prev) => prev - 1)}>
          Prev
        </button>
        <span>
          {page} / {totalPages}
        </span>
        <button disabled={page === totalPages} onClick={() => setPage((prev) => prev + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}