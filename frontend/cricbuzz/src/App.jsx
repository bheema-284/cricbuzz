import './App.css';
import { HomePage, LatestScores, News, Videos } from './components/HomePage';
import { Navbar } from './components/Navbar';
import { NewsDetailPage } from './components/NewsDetails';
import { Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey, red } from '@mui/material/colors';
import { Paper } from '@mui/material';
import { useState } from 'react';
import { Footer } from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

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
        <div id="dh3">
          <h3 id="H3">FEATURED MATCHES</h3>
        </div>
        <div id="scores">
          <div className="scores">
            <LatestScores />
          </div>
        </div>
        <hr />
        <div className="container">
          <News />
          <HomePage />
          <Videos />
        </div>
        <Routes>
          <Route path="/news/:id" element={<NewsDetailPage />} />
        </Routes>
      </Paper>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
