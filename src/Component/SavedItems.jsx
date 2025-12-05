import React from 'react'
import "./SavedItem.css"
import ProductCard from './ProductCard'

const dummyItems=[
    {id: 1, name: "Thick Vintage", price: 4300, stock: 40, image: "/src/assets/Image1.png.png"},
    {id: 2, name: "Thick Vintage", price: 4300, stock: 40, image: "/src/assets/Image2.png.png"},
    {id: 3, name: "Thick Vintage", price: 4300, stock: 40, image: "/src/assets/Image3.png.png"},
    {id: 4, name: "Thick Vintage", price: 4300, stock: 40, image: "/src/assets/Image4.png.png"},
    {id: 5, name: "Thick Vintage", price: 4300, stock: 40, image: "/src/assets/Image5.png.png"},
    {id: 6, name: "Thick Vintage", price: 4300, stock: 40, image: "/src/assets/Image6.png.png"},
]
const SavedItems = () => {
  return (
    <div className='savedItems'>
        <h3>Saved Items</h3>
        <div className='grid'>{dummyItems.map((item) =>(
            <ProductCard key={item.id} item={item}/>
        ))}
        </div>
    </div>
  )
}

export default SavedItems