import './App.css';
import { Home } from './components/Home';
import { Box } from '@mui/material';

function App() {
  return (
    <>
      <Box m={3} pt={3}>
        <Home />
      </Box>
    </>
  );
}

export default App;
