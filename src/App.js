
import './App.css';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import { Switch,Route,useHistory } from "react-router-dom"
import Button from '@mui/material/Button';

import Product from "./products.js";


function App() {
const history=useHistory("");
  return (
    <div className="App">
    <AppBar position="static">
    <Toolbar variant="dense">
   
    <Button variant="text" color="inherit" onClick={()=>history.push("/products")}>PRODUCTS</Button>
    </Toolbar>
    </AppBar>
  <Switch>
 
 <Route  path= "/products">
 <Product/>
 </Route>
  </Switch>
    
    
   

   
    </div>
  );
}

export default App;
