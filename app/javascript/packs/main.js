import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "../components/Home"
import Navbar from '../components/Navbar';

//Css and js Import
import '../../assets/stylesheets/application.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
    }
  }

  render() {
    return (
      <div>
      	<Navbar />
      	<Switch>
           <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}
export default App;