import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import { MainBackground } from '../components/Common/Common.styling';

function Home() {
  return (
    <>
      <MainBackground>
        <Outlet />

        <Box id="footer" sx={{ flexShrink: 0, textAlign: 'center', py: 2 }}>
          © 2025 Stapleton Antiques
        </Box>
      </MainBackground>
    </>
  )
}

export default Home;