import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import {Typography} from '@mui/material';
import {Box} from '@mui/system'; 
import LandingPage from './pages/LandingPage';  
import PageData from './pages/PageData'; 

const App = () => {
  return (
    <div>
      <Router>
        <Box sx={{textAlign: 'center'}}>
          <Typography>
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route exact path="/pagedata" element={<PageData />} /> 
            </Routes>
          </Typography>
        </Box>
      </Router>
    </div>
  )
}
export default App
