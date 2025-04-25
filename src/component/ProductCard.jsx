import { useState } from "react";

function ProductCard(){
let i=5;
let [j,setJ]=useState(10);
let add=()=>{
    setJ(j++);
    i++;
}
return (
<div>

    <h1>{i}====={j}</h1>
    <button onClick={add}>click</button>

</div>
)
}
export default ProductCard;