
import './App.css';
import * as React  from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function App() {
  const [name , setname] = useState()
  const [password , setpassword] = useState() 
  handleClick= () => { 

  }

  
  return (
    
    <div className="App">
     
    <div className='form'>
      <form>
        UserId:<input type={'text'} onChange={setname(target.value)} ></input><br/>
        Password:<input type={'password'} onChange={setpassword(target.value)}></input><br/>
        <Stack direction="row" spacing={2}>
     
      <Button variant="contained" color="success" className='btn' onClick="">
        Success
      </Button>
      
    </Stack>
      </form>
    </div>
    </div>
  );
}

export default App;
