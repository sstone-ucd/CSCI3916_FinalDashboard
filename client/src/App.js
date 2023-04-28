//import theme from material ui
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material"; 
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "theme";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "scenes/layout"; 
import Dashboard from "scenes/dashboard";
import Products from "scenes/products"; 

function App() {
  const mode = useSelector((state) => state.global.mode); 
  //create a theme using material UI and pass in the settings I created in the Theme.js file
  const theme = useMemo(() => createTheme(themeSettings((mode)), [mode]));

  //use browserRouter to create nav bar, use my own defined Layout so every page has the nav and side bar
  //set the homepage to the dashboard
  return (
    <div className="app">
      
      <BrowserRouter>
      <ThemeProvider theme= {theme}>
        <CssBaseline />
        <Routes>
          <Route element = {<Layout />}>
            <Route path ="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Products />}/>
          </Route>
        </Routes>
      </ThemeProvider>
     </BrowserRouter>
    </div>
  );
}

export default App;
