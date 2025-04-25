import logo from './logo.svg';
import './App.css';
import ProductCard from './component/ProductCard'

function App() {
//   //creating objects in js
//   const product1={
//     name:"Apple",
//     price:99999999000
//   }
//   const product2={
//     name:"Samsung",
//     price:25000
//   }
//   console.log(product1);
//   console.log(product2);

// // creating array
// const productlist=[product1,product2];
// console.log(productlist);
// console.log(productlist[0].name);

// //creating function

// //function declaration
// function add(num1,num2){
//   return num1+num2;
// }
// console.log(add(5,2));

// //function expression
// const mul=function(x,y){
// return x*y;
// }
// console.log(mul(5,2));
          
// //arrow function
// const addnumbers=(num1,num2) => num1+num2;
// console.log(addnumbers(5,2));

// //array.map()- used to iterate numbers one by one
// const numbers=[1,2,3,4,5];
// numbers.map((num)=>console.log(num*2));

// productlist.map((prod)=>{
// console.log(prod.name);
// console.log(prod.price);
// })

  return (
    <div className="App">
      <header className="App-header">
        <ProductCard/>
      </header>
    </div>
  );
}

export default App;
