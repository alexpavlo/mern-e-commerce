import React, {useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

//screens
import HomeScreen from "./screens/homescreen/homeScreen";
import ProductScreen from "./screens/productscreen/productScreen";
import CartScreen from "./screens/cartscreen/cartScreen";

//components
import Navbar from "./components/navbar/navbar";
import Backdrop from './components/backdrop/backdrop';
import SideDrawer from './components/sidedrawer/sideDrawer';

function App() {
    const [sideToggle, setSideToggle] = useState(false)

    return (
        <Router>
                <Navbar click={()=> setSideToggle(true)}/>
                <SideDrawer show={sideToggle} click={()=>setSideToggle(false)}/>
                <Backdrop show={sideToggle} click={()=>setSideToggle(false)}/>
                <main>
                    <Switch>
                        <Route exact path='/' component={HomeScreen}/>
                        <Route exact path='/product/:id' component={ProductScreen}/>
                        <Route exact path='/cart' component={CartScreen}/>
                    </Switch>
                </main>
        </Router>
    );
}

export default App;
