import {
  AppBar,
  Toolbar,
  IconButton,
  Container,
  Stack,
  useMediaQuery,
  useTheme,
  useScrollTrigger,
  Slide
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { CONSTANTS } from '../../common/constants';
import NavigationDrawer from '../NavigationDrawer/NavigationDrawer';
import { useState } from 'react';
import { pages } from '../../common/variables';

import { LogoMobile, NavDrawerIconWrapper, LogoComputer, NavigationItemWrapper } from './NavigationBar.styling';
import { AppBarButton } from '../Common/Common.styling';
import InstagramIcon from '@mui/icons-material/Instagram';

function NavigationBar({ nonGalleryView = false } : {nonGalleryView? : boolean}) {
  const theme = useTheme();
  const onMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const scrolled = useScrollTrigger({threshold: 100});

  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  return (
    <AppBar position='sticky' 
    sx={{
      backgroundColor: nonGalleryView ? theme.palette.primary.main : scrolled ? theme.palette.primary.main : "transparent",
      transition: scrolled ? "0.3s" : "0.5s",
    }}
    elevation={scrolled ? 2 : 0}
    >
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
                {nonGalleryView ? CONSTANTS.COMPANY_NAME : scrolled ? CONSTANTS.COMPANY_NAME : null}
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
                sx={{
                  visibility : nonGalleryView ? "visible" : scrolled ? "visible" : "hidden"
                }}
                to='/'
              >
                {CONSTANTS.COMPANY_NAME}
              </LogoComputer>
              <NavigationItemWrapper>
                <Stack direction="row" sx={{alignItems: 'center'}} spacing={4} margin={1}>
                  {pages.map((page) => (
                    <AppBarButton
                    variant='h5'
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

export function HideableNavigationBar() {
  return (
    <Slide appear={true} direction="down" in={true}>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1200 }}>
        <NavigationBar />
      </div>
    </Slide>
  );
}

