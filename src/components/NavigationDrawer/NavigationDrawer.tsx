import * as React from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { pages } from '../../common/variables';
import { AppBarButton } from '../Common.styling';
import Stack from '@mui/material/Stack';

type NavigationDrawerProps = {
    open: boolean;
    onClose: () => void;
    onOpen: () => void;
}

export default function NavigationDrawer({open, onOpen, onClose} : NavigationDrawerProps) {
  return (
        <SwipeableDrawer
        disableSwipeToOpen
        anchor="right"
        open={open}
        onClose={onClose}
        onOpen={onOpen}
        >
          <Stack spacing={3} padding={3}>
            {pages.map((page) => (
                <AppBarButton
                key={page.title}
                onClick={() =>{
                  window.open(page.link);
                }}
                >
                  {page.title}
                </AppBarButton>
            ))}
            </Stack>
        </SwipeableDrawer>
  );
}