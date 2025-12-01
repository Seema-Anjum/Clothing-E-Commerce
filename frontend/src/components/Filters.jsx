import React from "react";
import "../styles/filters.css";

export default function Filters({
  search,
  setSearch,
  category,
  setCategory,
  size,
  setSize,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  applyFilters
}) {
  const sizes = ["XS", "S", "M", "L", "XL"];
  const categories = ["men", "women", "kids"];

  return (
    <div className="filters-container">
      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Category Filter */}
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      {/* Size Filter */}
      <select value={size} onChange={(e) => setSize(e.target.value)}>
        <option value="">All Sizes</option>
        {sizes.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>

      {/* Price Filters */}
      <div className="price-range">
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      <button onClick={applyFilters}>Apply</button>
    </div>
  );
}
