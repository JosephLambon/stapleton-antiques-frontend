import * as React from 'react';
import { Button, Box } from '@mui/material';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { pages } from '../common/variables';

type DrawerProps = {
    open: boolean;
    toggleDrawer: (open : boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
    handleCloseNavMenu: () => void;
}

export default function SwipeableTemporaryDrawer({open, toggleDrawer, handleCloseNavMenu} : DrawerProps) {
  return (
        <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        >
            <Box 
                sx={{width: '80vw'}}
            >
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ 
                      m: 2,
                      display: 'block',
                      textAlign: 'left'
                     }}
                  >
                    {page}
                  </Button>
                ))}
            </Box>
        </SwipeableDrawer>
  );
}