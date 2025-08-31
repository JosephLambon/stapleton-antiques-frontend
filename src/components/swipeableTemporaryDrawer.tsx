import * as React from 'react';
import { Button, Box } from '@mui/material';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { pages } from '../common/variables';

type DrawerProps = {
    open: boolean;
    toggleDrawer: (open : boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export default function SwipeableTemporaryDrawer({open, toggleDrawer} : DrawerProps) {
  return (
        <SwipeableDrawer
        disableSwipeToOpen
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        >
            <Box 
                sx={{
                  width: '80vw',
                }}
            >
                {pages.map((page) => (
                  <Button
                    key={page.title}
                    onClick={() =>{
                      window.open(page.link);
                    }}
                    sx={{ 
                      m: 2,
                      fontSize: '16px',
                      display: 'block',
                      textAlign: 'left',
                      textTransform: 'capitalize'
                     }}
                  >
                    {page.title}
                  </Button>
                ))}
            </Box>
        </SwipeableDrawer>
  );
}