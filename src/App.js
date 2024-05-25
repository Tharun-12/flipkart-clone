
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';

import {Box} from "@mui/material"
import Product from './component/Product/Product';


function App() {
  return (
    <div>
      <Header />
      <Box style = {{marginTop: 54}}>
         <Home />
      </Box>
      <Product />
      
    </div>
  );
}

export default App;
