import React from 'react';
import './ProductCard.css';
import { FaHeart } from 'react-icons/fa';


export default function ProductCard({ product, onAdd }) {
return (
<div className="product-card">
<FaHeart className="heart" />
<img src={product.image} alt={product.name} />
<div className="product-body">
<h4>{product.name}</h4>
<p>40 units in stock</p>
<div className="p-row">
<span>₦{product.price}</span>
<button className="btn-outline" onClick={() => onAdd(product)}>
Add to cart
</button>
</div>
</div>
</div>
);
}