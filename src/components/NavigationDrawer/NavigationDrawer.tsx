import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { pages } from '../../common/variables';
import { AppBarButton } from '../Common/Common.styling';
import Stack from '@mui/material/Stack';
import CloseIcon from '@mui/icons-material/Close';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Box } from '@mui/material';

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
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', margin: 2 }}>
              <CloseIcon fontSize='large' onClick={onClose}/>
          </Box>
          <Stack spacing={8} padding={6}>
            {pages.map((page) => (
                <AppBarButton
                variant='h3'
                key={page.title}
                to={page.link}
                >
                  {page.title}
                </AppBarButton>
            ))}
              <AppBarButton
                onClick={() => window.open("https://www.instagram.com/stapletonantiques/")}
                >
                <InstagramIcon fontSize='large' />
              </AppBarButton>
            </Stack>
        </SwipeableDrawer>
  );
}