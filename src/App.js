import { useState } from "react";

import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import { Route } from "react-router-dom";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Theme"

function App() {
   const [theme, setTheme] = useState('light');
    const themeToggler = () => {

    theme === 'light' ? setTheme('dark') : setTheme('light')
}
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <Navbar themeToggler={themeToggler} />
          <GlobalStyles />
          <Route path='/'>
            <Layout />
          </Route>
    </ThemeProvider>
  );
}

export default App;
