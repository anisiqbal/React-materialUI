import React , {useState} from 'react';
import './App.css';
import Button from '@material-ui/core/Button'


function App() {
  const [color, setcolor]=useState("primary")
  function customMe(){

    setcolor("secondary")
    // alert("function called")
  }
  return (
    <div className="App">
      <h1>React-MUI</h1>
      <Button 
      color={color}
      variant="outlined" 
      onClick={()=>{customMe()}} 
      >Click me </Button>
       
       
      
     

    </div>
  );
}

export default App;
