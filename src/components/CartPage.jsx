import { useEffect, useState } from "react";
import { cartProducts } from "../api";
function CartPage(){   
    const [cartitems,setCartitems]=useState([]);
    useEffect(()=>{
        cartProducts()
        .then((res)=>setCartitems(res.data))
        .catch((error)=>console.log())
        },[])

    return(
    <div>
        {
        cartitems.map((items)=>(
        <div> <h1>{items.id}</h1>
        <h1>{items.product.id}</h1>
        <h1>{items.product.name}</h1>
        </div>          
         ) )
        }
       
    </div>)
}
export default CartPage;