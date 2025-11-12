import {
  AppBar,
  Toolbar,
  IconButton,
  Container,
  Stack,
  useMediaQuery,
  useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { CONSTANTS } from '../../common/constants';
import NavigationDrawer from '../NavigationDrawer/NavigationDrawer';
import { useState } from 'react';
import { pages } from '../../common/variables';

import { LogoMobile, NavDrawerIconWrapper, LogoComputer, NavigationItemWrapper } from './NavigationBar.styling';
import { AppBarButton } from '../Common.styling';
import InstagramIcon from '@mui/icons-material/Instagram';

function NavigationBar() {
  const theme = useTheme();
  const onMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <AppBar position='sticky'>
      <Container disableGutters={onMobile ? true : false} maxWidth="lg">
        <Toolbar sx={{
          display: 'grid',
          gridTemplateAreas: `"left middle right"`,
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center'
        }}>
          {onMobile ? (
            <>
                <LogoMobile
                  variant="h3"
                  noWrap
                  to="/"
                >
                {CONSTANTS.COMPANY_NAME}
                </LogoMobile>
              <NavDrawerIconWrapper>
                <IconButton
                  size="large"
                  onClick={openDrawer}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
              </NavDrawerIconWrapper>
              <NavigationDrawer 
                open={drawerOpen}
                onClose={closeDrawer}
                onOpen={openDrawer}
                />
            </>
          ) : (
            <>
              <LogoComputer
                variant="h4"
                noWrap
                to='/'
              >
                {CONSTANTS.COMPANY_NAME}
              </LogoComputer>
              <NavigationItemWrapper>
                <Stack direction="row" sx={{alignItems: 'center'}} spacing={4} margin={1}>
                  {pages.map((page) => (
                    <AppBarButton
                    variant='h6'
                    key={page.title}
                    to={page.link}
                    >
                      {page.title}
                    </AppBarButton>
                  ))}
                  <InstagramIcon onClick={() => window.open("https://www.instagram.com/stapletonantiques/")} />
                </Stack>
              </NavigationItemWrapper>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavigationBar;