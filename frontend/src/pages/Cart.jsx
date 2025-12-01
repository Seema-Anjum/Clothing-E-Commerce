import React, { useEffect, useState } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const removeItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateQty = (index, qty) => {
    const updatedCart = [...cart];
    updatedCart[index].qty = Number(qty);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cart.length === 0) return <h3 style={{ padding: "20px" }}>Your cart is empty.</h3>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      {cart.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
            borderBottom: "1px solid #ccc",
            paddingBottom: "10px"
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            style={{ width: "100px", height: "100px", objectFit: "cover", marginRight: "20px" }}
          />

          <div style={{ flex: 1 }}>
            <h4>{item.name}</h4>
            <p>Size: {item.size}</p>
            <p>Price: ₹{item.price}</p>

            <label>Qty: </label>
            <input
              type="number"
              value={item.qty}
              min="1"
              onChange={(e) => updateQty(index, e.target.value)}
              style={{ width: "60px" }}
            />
          </div>

          <button
            onClick={() => removeItem(index)}
            style={{
              background: "red",
              color: "white",
              border: "none",
              padding: "5px 10px",
              cursor: "pointer",
              borderRadius: "4px"
            }}
          >
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>

      <button
        onClick={() => alert("Proceed to checkout")}
        style={{
          padding: "10px 20px",
          background: "green",
          color: "white",
          border: "none",
          cursor: "pointer",
          borderRadius: "4px",
          marginTop: "10px"
        }}
      >
        Checkout
      </button>
    </div>
  );
}
