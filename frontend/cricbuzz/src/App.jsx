import './App.css';
import { HomePage } from './components/HomePage';
import { Navbar } from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey, red } from '@mui/material/colors';
import { Paper } from '@mui/material';
import { useState } from 'react';
import { Footer } from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  // Theme customization
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: red[600],
      },
      secondary: {
        main: grey[900],
      },
      background: {
        default: darkMode ? '#121212' : '#edf1fd',
      },
    },
  });

  const handleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper
        sx={{
          minHeight: '100vh',
          backgroundColor: darkMode ? '#121212' : '#edf1fd',
        }}>
        <Navbar handleTheme={handleTheme} />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Paper>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
