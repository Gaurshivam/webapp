import React, { useEffect, useState } from 'react';
import './Product.css'

const Product = () => {
    const [user, setUser] = useState([]);


    useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data) 
        setUser(data)
    })  
    },[]);

  return (
    <div>
      <h1 style={{textAlign:"center", color:"green"}}>Choose Your Best Prodcut</h1>
      <div>
      {
       user.length > 0 ? <div className='products'>
        {
            user.map((item,i)=>{
             return(
                <div className='main' key={i}>
                    <img src={item.image} width={200} height={200} alt='Prodcut' />
                    <h2>{item.category}</h2>
                    <h3>Price : {item.price}</h3>
                    <button>Add to card</button>
                </div>
             )
            })
        }
       </div> : <h2 style={{color:"red",fontSize:"18px",
       marginTop:"100px", textAlign:"center"}}> Products Not Display</h2> 
      }
      </div>
    </div>
  );
}

export default Product;
