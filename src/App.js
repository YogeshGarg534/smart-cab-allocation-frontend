import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Dashboard from './Pages/Dashboard';
import { createBrowserHistory } from "history";

function App() {
  const history = createBrowserHistory();
  return (
    <div className="center">
      <BrowserRouter history={history} >
      <Switch>
          <Route exact path='/' render={() => <Login />}/>
          <Route exact path='/register' render={() => <Register />}/>
          <Route exact path='/dashboard' render={() => <Dashboard />}/>
      </Switch>
     </BrowserRouter>
    </div>
  );
}



export default App;
