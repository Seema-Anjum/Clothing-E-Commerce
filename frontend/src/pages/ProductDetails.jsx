import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";
// import "./ProductDetails.css"; // Separate CSS file

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [size, setSize] = useState("");
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    loadProduct();
  }, [id]);

  const loadProduct = async () => {
    try {
      const res = await api.get(`/api/products/${id}`);
      setProduct(res.data);
    } catch (err) {
      console.error(err);
      alert("Product not found or server error");
    } finally {
      setLoading(false);
    }
  };

  const addToCart = () => {
    if (!size) return alert("Please select a size");
    if (!product) return;

    const cartItem = {
      product: product._id,
      name: product.name,
      price: product.price,
      size,
      qty: Number(qty),
      image: product.imageUrl,
    };

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added to cart");
  };

  if (loading) return <h3>Loading...</h3>;
  if (!product) return <h3>Product not found</h3>;

  return (
    <div className="product-details">
      <img
        src={`https://e-commerce-backend-pxls.onrender.com${product.imageUrl}`}
        alt={product.name}
        className="product-image" width="250px" height="300px"

      />

      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="price">₹{product.price}</p>

        <label>Select Size:</label>
        <select value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="">Select</option>
          {product.sizes?.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <label>Quantity:</label>
        <input
          type="number"
          value={qty}
          min="1"
          onChange={(e) => setQty(e.target.value)}
        />

        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
}
