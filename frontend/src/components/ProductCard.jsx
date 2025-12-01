import React from "react";

export default function ProductCard({ product, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        width: "200px",
        cursor: "pointer",
        textAlign: "center"
      }}
    >
      <img
        src={product.imageUrl || product.image}
        alt={product.name}
        style={{ width: "100%", height: "200px", objectFit: "cover", marginBottom: "10px" }}
      />
      <h3 style={{ fontSize: "16px" }}>{product.name}</h3>
      <p style={{ fontWeight: "bold" }}>₹{product.price}</p>
    </div>
  );
}
