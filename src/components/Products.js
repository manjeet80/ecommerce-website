import React, { useContext,useEffect,useState } from 'react'
import { CardContext } from '../Global/CardContext'

import Banner from './Banner'
const Products = () => {
const {dispatch} = useContext(CardContext)
const [data,setData] = useState([])
const [allData, setAllData] = useState([])

useEffect (()=>{
fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then ((result)=>{
    console.log(result)
setData(result)
setAllData(result)
  })
},[])

const filterResult = (cartItem) => {

  const updateItem = data.filter((curData) =>{
    return curData.category === cartItem
  })
  console.log(updateItem,data,cartItem)
  setAllData(updateItem)
}
  return (

    <div className="container">
      <Banner/>
     <div className="container">
     <div className="button">
        <button className='btn'onClick={() => setAllData(data)}>All</button>
        <button className='btn' onClick={() => filterResult ("men's clothing")}>Men Product</button>
        <button className='btn' onClick={() => filterResult ("jewelery")}> Jewelery Product</button>
        <button className='btn'onClick={() => filterResult ("women's clothing")}>Women Product</button>
        <button className='btn'onClick={() => filterResult ("electronics")}>Electronic Product</button>
      </div>
     </div>
    <div className='products'>
      {allData?.map((product)=>(
        <div className="product" key={product.id}>
          
          <div className="product-image">
            <img src={product.image} alt="not found" />
            </div>  
          
            <div className="product-details">
              <div className="product-name">
                {product.title}
              </div>
              <div className="product-price">
                ${product.price}.00
               
                </div>
              </div> 
            <div className="category">{product.category}</div>
           
           <div className="add-cart"onClick={() =>dispatch({type:'ADD_TO_CART',id:product.id,product})}>
                add to cart
               </div>
             
           </div>
                 
      ))}
    </div>
   
    </div>
  )
}

export default Products
