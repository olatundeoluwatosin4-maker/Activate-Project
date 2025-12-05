import React from 'react';
import './Cart.css';
import { FaPlus, FaMinus } from 'react-icons/fa';


export default function Cart({ cart, increase, decrease }) {
const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);


return (
<aside className="cart">
<h3>Cart Items</h3>


{cart.map((item) => (
<div key={item.id} className="cart-item">
<img src={item.image} alt={item.name} />
<div className="ci-info">
<strong>{item.name}</strong>
<p>₦{item.price * item.qty}</p>
<div className="qty">
<button onClick={() => decrease(item.id)}><FaMinus /></button>
<span>{item.qty}</span>
<button onClick={() => increase(item.id)}><FaPlus /></button>
</div>
</div>
</div>
))}


<div className="cart-summary">
<div className="summary-row"><span>Total</span><strong>₦{total}</strong></div>
<button className="checkout-btn">Proceed to checkout</button>
</div>
</aside>
);
}