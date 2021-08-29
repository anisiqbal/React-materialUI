import React , {useState} from 'react';
import './App.css';
import { Grid, Button, TextField} from '@material-ui/core'


function App() {
  const [color, setcolor] = useState("primary");
  const [name, setName] = useState("");

  function customMe() {
    // setcolor("secondary");
     alert("Muhammad Anis");
    
  }

  function onNameChange(e) {
    setName(e.target.value);
    // console.log(e.target.value);
  }

  return (
    <div className="App">
      <h1>React-MUI</h1>

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField label="Your Name" onChange={ (e) => {onNameChange(e)} } />

          <label>My Name is {name}</label>
        </Grid>

        <Grid item xs={6}>
          <Button 
          color={color}
          variant="outlined" 
          onClick={()=> { customMe() }}>
            Click me
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
