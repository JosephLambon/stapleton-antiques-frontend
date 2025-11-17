import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import { MainBackground } from '../components/Common/Common.styling';
import { HideableNavigationBar } from '../components/NavigationBar/NavigationBar';

function Home() {
  return (
    <>
      <MainBackground>
        <HideableNavigationBar />
        
        <Outlet />

        <Box id="footer" sx={{ flexShrink: 0, textAlign: 'center', py: 2 }}>
          © 2025 Stapleton Antiques
        </Box>
      </MainBackground>
    </>
  )
}

export default Home;