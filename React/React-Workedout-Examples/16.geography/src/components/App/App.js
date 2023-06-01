import { BrowserRouter, Route, Switch } from 'react-router-dom';
import All from '../Countries/All';
import Search from '../Countries/Search';
import Continent from '../Countries/Continent';
import Header from '../Header';
import MainMenu from '../MainMenu';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <MainMenu />
          </Route>
          <Route exact path="/all">
            <All />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/continent">
            <Continent />
          </Route>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
