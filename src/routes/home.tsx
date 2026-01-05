import { Outlet } from 'react-router-dom';
import { MainBackground, Spacer } from '../components/Common/Common.styling';
import { createContext, useState } from 'react';
import Footer from '../components/Common/Footer';
import React from 'react';
import { useTheme } from '@mui/material';

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
  const theme = useTheme();

  return (
    <StatusContext.Provider value={{selectedStatuses, setSelectedStatuses}}>
      <MainBackground>
        <Outlet />
        <Spacer />
        <Footer />
      </MainBackground>
    </StatusContext.Provider>
  )
}

export default Home;