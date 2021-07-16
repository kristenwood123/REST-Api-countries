import { useState } from "react";

import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Theme"

function App() {
   const [theme, setTheme] = useState('light');
    const themeToggler = () => {
      console.log('sa;lkjas;dlkj');
    theme === 'light' ? setTheme('dark') : setTheme('light')
}
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <>
      <GlobalStyles/>
      <Navbar themeToggler={themeToggler} />
      <Layout/>
    </>
    </ThemeProvider>
  );
}

export default App;
