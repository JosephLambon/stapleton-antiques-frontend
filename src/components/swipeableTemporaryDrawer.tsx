import * as React from 'react';
import Box from '@mui/material/Container';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

type DrawerProps = {
    open: boolean;
    toggleDrawer: (open : boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export default function SwipeableTemporaryDrawer({open, toggleDrawer} : DrawerProps) {
  return (
    <React.Fragment >
        <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        >
            <Box 
                sx={{width: '80vw'}}
            >
                For Sale
            </Box>
        </SwipeableDrawer>
    </React.Fragment>
  );
}