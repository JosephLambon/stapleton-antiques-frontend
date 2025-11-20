import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import { MainBackground } from '../components/Common/Common.styling';
import { createContext, useState } from 'react';

export const StatusContext = createContext({
  selectedStatuses: { available: true, sold: false },
  setSelectedStatuses: (value: any) => {}
});

function Home() {
  const [selectedStatuses, setSelectedStatuses] = useState({
      available: true,
      sold: false
    });

  return (
    <StatusContext.Provider value={{ selectedStatuses, setSelectedStatuses }}>
      <MainBackground>
        <Outlet />

        <Box id="footer" sx={{ flexShrink: 0, textAlign: 'center', py: 2 }}>
          © 2025 Stapleton Antiques
        </Box>
      </MainBackground>
    </StatusContext.Provider>
  )
}

export default Home;