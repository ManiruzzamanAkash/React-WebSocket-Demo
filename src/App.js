import React, { useState } from 'react';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Notification from './pages/Notification';
import ChatPage from './module-chat/pages/ChatPage';
import './App.css';
import Login from './components/auth/Login';
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
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />
  }

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
              <ChatPage />
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
