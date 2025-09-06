import { styled } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

export const SwipeableDrawerThemed = styled(SwipeableDrawer)(({theme}) => ({
    '& .MuiDrawer-paper': {
    backgroundColor: theme.palette.primary.main,
    opacity: 0.95,
    width: theme.spacing(25)
  }
}))