import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import { MainBackground } from '../components/Common/Common.styling';
import { createContext, useState } from 'react';
import React from 'react';

export interface StatusContextType {
  selectedStatuses: { available: boolean, sold: boolean };
  setSelectedStatuses: React.Dispatch<
  React.SetStateAction<{ available: boolean, sold: boolean}>
  >;
};

export const StatusContext = createContext<StatusContextType | null>(null);

function Home() {
  const [selectedStatuses, setSelectedStatuses] = useState({
      available: true,
      sold: false
    });

  return (
    <StatusContext.Provider value={{selectedStatuses, setSelectedStatuses}}>
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