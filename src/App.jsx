import React, { useState } from 'react';
import './App.css';
import SideBar from './Component/SideBar';
import Topbar from './Component/Topbar';
import KPICards from './Component/KPICards';
import ProductGrid from './Component/ProductGrid';
import Cart from './Component/Cart';


import img1 from './assets/Image1.png.png';
import img2 from './assets/Image2.png.png';
import img3 from './assets/Image3.png.png';
import img4 from './assets/Image4.png.png';
import img5 from './assets/Image5.png.png';
import img6 from './assets/Image6.png.png';
import logo from './assets/logo.png'

const products = [
{ id: 1, image: img1, name: 'Thick Vintage', price: 4300 },
{ id: 2, image: img2, name: 'Thick Vintage', price: 4300 },
{ id: 3, image: img3, name: 'Thick Vintage', price: 4300 },
{ id: 4, image: img4, name: 'Thick Vintage', price: 4300 },
{ id: 5, image: img5, name: 'Thick Vintage', price: 4300 },
{ id: 6, image: img6, name: 'Thick Vintage', price: 4300 }
];


export default function App() {
const [cart, setCart] = useState([]);


const addToCart = (product) => {
setCart((prev) => {
const item = prev.find((p) => p.id === product.id);
if (item) {
return prev.map((p) =>
p.id === product.id ? { ...p, qty: p.qty + 1 } : p
);
}
return [...prev, { ...product, qty: 1 }];
});
};


const increaseQty = (id) => {
setCart((prev) =>
prev.map((item) =>
item.id === id ? { ...item, qty: item.qty + 1 } : item
)
);
};


const decreaseQty = (id) => {
setCart((prev) =>
prev
.map((item) =>
item.id === id ? { ...item, qty: item.qty - 1 } : item
)
.filter((item) => item.qty > 0)
);
};


return (
<div className="dashboard">
<SideBar />
<div className="main-area">
<Topbar />
<KPICards />
<div className="content-area">
<ProductGrid products={products} onAdd={addToCart} />
<Cart cart={cart} increase={increaseQty} decrease={decreaseQty} />
</div>
</div>
</div>
);
}
