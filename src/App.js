import React, {useState, useEffect} from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  var person ={
    name: "Dr. Mahfuz",
    Job: "Singer"
  }
var style={
  color:'red'
}
  const nayoks =['Anwar','Jafor','Alomgir','Salman']
  const products = [
    {name:'Photoshop', price:'$90.99'},
    {name:'Illustrator', price:'$60.99'},
    {name:'Pdf Reader', price:'$6.99'},
    {name:'Premire', price:'$26.99'}
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p style={style}>My First React paragraph</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
          {
            products.map(pd => <Product product={pd}></Product>)
          }
        </ul>
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>

      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count+1);
  const handleDecrease = () => setCount(count-1);
  return(
    <div>
      <h1>Count: {count}</h1>
      {/* <button onClick={handleDecrease}>Decrease</button> */}
      {/* <button onClick={handleIncrease}>Increase</button> */}
      <button onMouseMove={() => setCount(count-1)}>Decrease</button>
      <button onClick={() => setCount(count+1)}>Increase</button>
    </div>
  )
}

function Users(){
  const  [users, setUsers] = useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  })

  return(
    <div>
      <h3>Dynamic Users:{users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'230px',
    width:'200px',
    float:'left',
    margin:'10px'
  }
  const {name,price} = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h4>{price}</h4>
      <button>Buy Now</button>
    </div>
  )
}



export default App;
