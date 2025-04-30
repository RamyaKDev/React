import logo from './logo.svg';
import './App.css';
import ProductCard from './components/ProductCard';
import { getProducts } from './api';
import { useEffect, useState } from 'react';
import CartPage from './components/CartPage';
import { navigate,  useNavigate } from 'react-router-dom';

function App() {
  const navigate=useNavigate();
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
        
        <button onClick={()=>navigate("/cart")}>view cart</button>
      </header>
    </div>
  );
}

export default App;
