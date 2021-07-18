import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Theme"

// App Components
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import DetailsPage from "./components/DetailsPage";


function App() {
   const [theme, setTheme] = useState('light');
    const themeToggler = () => {

    theme === 'light' ? setTheme('dark') : setTheme('light')
}
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Navbar themeToggler={themeToggler} />
      <GlobalStyles />

        <Switch>
          <Route exact path='/' component={Layout}/>
          <Route path='/details' component={DetailsPage}/>          </Switch>
    </ThemeProvider>
  );
}

export default App;
