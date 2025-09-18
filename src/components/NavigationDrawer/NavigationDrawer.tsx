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
          <Stack spacing={5} padding={6}>
            {pages.map((page) => (
                <AppBarButton
                variant='h4'
                key={page.title}
                to={page.link}
                >
                  {page.title}
                </AppBarButton>
            ))}
            </Stack>
        </SwipeableDrawer>
  );
}