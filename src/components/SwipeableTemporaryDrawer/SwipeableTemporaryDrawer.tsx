import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { pages } from '../../common/variables';
import { AppBarButton } from '../Common';
import Stack from '@mui/material/Stack';

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
          <Stack spacing={3} padding={3}>
            {pages.map((page) => (
                <AppBarButton
                label={page.title}
                key={page.title}
                onClick={() =>{
                  window.open(page.link);
                }}
                >
                </AppBarButton>
            ))}
            </Stack>
        </SwipeableDrawer>
  );
}