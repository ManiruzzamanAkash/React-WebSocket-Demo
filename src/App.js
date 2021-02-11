import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Notification from './pages/Notification';
import Chat from './pages/Chat';

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const AppContext = React.createContext(themes.light);

function App() {
  return (
    <AppContext.Provider value={themes.dark}>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/notification">
              <Notification />
            </Route>
            <Route path="/chat">
              <Chat />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>

    </AppContext.Provider>


  );
}

export default App;
