import React from 'react';
import ProductCard from './ProductCard';
import './ProductGrid.css';


export default function ProductGrid({ products, onAdd }) {
return (
<div className="product-grid">
{products.map((p) => (
<ProductCard key={p.id} product={p} onAdd={onAdd} />
))}
</div>
);
}