import React from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './Header.js';
import Home from "./Home";


function App() {
  return (
    <Router>
         <div className="app">
         <Switch>
           <Route path="/checkout">
           <Header/>
             <h1>checkout</h1>
           </Route>
           <Route path="/login">
           <Header/>
             <h1>Login page</h1> 
           </Route>
           <Route path ="/">
             <Header/>
             <Home />
          
        
    
           </Route>
         </Switch>
   

    </div>

    </Router>
 
  );
}

{
  /* need react router*/
}

{
  /*localhost*/
}


{
  /*localhost.com/login*/
}



export default App;
