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
import { Link } from 'react-router-dom';
import { LogoMobile, NavDrawerIconWrapper, LogoComputer, NavigationItemWrapper } from './NavigationBar.styling';
import { AppBarButton } from '../Common.styling';


function NavigationBar() {
  const theme = useTheme();
  const onMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <AppBar position='relative'>
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
                variant="h4"
                noWrap
                component={Link}
                to='/'
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
                variant="h5"
                noWrap
                component={Link}
                to='/'
              >
                {CONSTANTS.COMPANY_NAME}
              </LogoComputer>
              <NavigationItemWrapper>
                <Stack direction="row" spacing={2} margin={1}>
                  {pages.map((page) => (
                    <AppBarButton
                    key={page.title}
                    component={Link}
                    to={page.link}
                    >
                      {page.title}
                    </AppBarButton>
                  ))}
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