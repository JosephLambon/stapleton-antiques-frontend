import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Constants } from '../common/constants';
import SwipeableTemporaryDrawer from './swipeableTemporaryDrawer';
import { useState, type KeyboardEvent, type MouseEvent } from 'react';
import { pages } from '../common/variables';
import { useNavigate } from 'react-router-dom';

function ResponsiveAppBar() {
  const navigate = useNavigate();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer =
    (open: boolean) =>
    (event: KeyboardEvent | MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as KeyboardEvent).key === "Tab" ||
          (event as KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setDrawerOpen(open);
    };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => {navigate('/')}}
            sx={{
              ml: 1,
              mr: 3,
              display: { xs: 'none', md: 'flex' },
              color: 'inherit',
            }}
          >
            {Constants.COMPANY_NAME}
          </Typography>
          
          <Typography
            variant="h5"
            noWrap
            onClick={() => {navigate('/')}}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1
            }}
          >
            {Constants.COMPANY_NAME}
          </Typography>
          <Box sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' }
            }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={() => {
                  window.open(page.link);
                }}
                sx={{
                   my: 2,
                   mx: 1,
                   fontSize: '16px',
                   color: 'white',
                   display: 'block',
                   textAlign: 'left',
                   textTransform: 'capitalize'
                  }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
          <Box sx={{
              mr: 0,
              ml: 'auto',
              flexGrow: 1,
              justifyContent: 'right',
              display: { xs: 'flex', md: 'none' } 
             }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            
          </Box>

          <SwipeableTemporaryDrawer 
            toggleDrawer={toggleDrawer}
            open={drawerOpen}
            />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
