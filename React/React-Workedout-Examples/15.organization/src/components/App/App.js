import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Header';
import Info from '../Info';
import MainMenu from '../MainMenu';
import './App.css';
import {All, Department, Gender, Search} from '../Employees';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <MainMenu />
          </Route>
          <Route exact path="/info">
            <Info/>
          </Route>
          <Route exact path="/login">
            Login
          </Route>
          <Route exact path="/all">
            <All />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/gender">
            <Gender />
          </Route>
          <Route exact path="/dept">
            <Department />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
