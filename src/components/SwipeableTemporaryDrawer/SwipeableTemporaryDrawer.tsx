import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Button, Box } from '@mui/material';
import { SwipeableDrawerThemed } from './SwipeableTemporaryDrawer.styling';
import { pages } from '../../common/variables';

type DrawerProps = {
    open: boolean;
    toggleDrawer: (open : boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

export default function SwipeableTemporaryDrawer({open, toggleDrawer} : DrawerProps) {
  const theme = useTheme();

  return (
        <SwipeableDrawerThemed
        disableSwipeToOpen
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
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
                  textTransform: 'capitalize',
                  color: theme.palette.primary.contrastText
                  }}
              >
                {page.title}
              </Button>
            ))}
        </SwipeableDrawerThemed>
  );
}