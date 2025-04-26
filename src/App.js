import logo from './logo.svg';
import './App.css';
import ProductCard from './components/ProductCard';
import { getProducts } from './api';
import { useEffect, useState } from 'react';

function App() {

  const [productList,setProductList]  = useState([]);

  useEffect(()=>{
    getProducts()
      .then((res)=>setProductList(res.data))
        .catch((err)=>console.log(err));
  },[])
 

  return (
    <div className="App">
      <header className="App-header">
        {
          productList.map((prod)=><ProductCard items={prod}/>)
        //  <ProductCard items = {productList[3]}/>
         
        }
        
        
      </header>
    </div>
  );
}

export default App;
