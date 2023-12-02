import { React, createContext, useState } from "react";
import "./Components/css/App.css";
import Header from "./Components/noteComponents/Header";
import Notes from "./Components/noteComponents/Notes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



import Documentation from "./Components/noteComponents/Documentation";
import Navbar from "./Components/noteComponents/Navbar";
import Sources from "./Components/noteComponents/Sources";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);



function App(props) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'dark' ? 'light' : 'dark'))
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className='App' id={theme}>
        <Router>
          <div className="main">
            <Header />
            <Navbar />
            <div className="modeSwitch">
              <label>{theme === 'light' ? 'Light Mode' : 'Dark Mode'} </label>
              <ReactSwitch onChange={toggleTheme} checked={theme === 'light'} />
            </div>
            <Switch>
              <Route path='/' component={Notes} exact />
              <Route path='/documentation' component={Documentation} />
              <Route path='/sources' component={Sources} />
            </Switch>
          </div>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}
export default App;