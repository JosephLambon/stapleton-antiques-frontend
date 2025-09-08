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
  import { Constants } from '../../common/constants';
  import SwipeableTemporaryDrawer from '../SwipeableTemporaryDrawer/SwipeableTemporaryDrawer';
  import { useState, type KeyboardEvent, type MouseEvent } from 'react';
  import { pages } from '../../common/variables';
  import { useNavigate } from 'react-router-dom';
  import { LogoMobile, IconButtonBoxMobile, LogoComputer, PageLinksComputer } from './AppBar.styling';
  import { AppBarButton } from '../Common';

  function ResponsiveAppBar() {
    const navigate = useNavigate();
    const theme = useTheme();
    const onMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
      <AppBar disableGutters position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{
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
                  component="a"
                  onClick={() => {navigate('/')}}
                >
                  {Constants.COMPANY_NAME}
                </LogoMobile>
                <IconButtonBoxMobile>
                  <IconButton
                    size="large"
                    onClick={toggleDrawer(true)}
                    color="inherit"
                  >
                    <MenuIcon />
                  </IconButton>
                  <SwipeableTemporaryDrawer 
                    toggleDrawer={toggleDrawer}
                    open={drawerOpen}
                    />
                </IconButtonBoxMobile>
              </>
            ) : (
              <>
                <LogoComputer
                  variant="h5"
                  component="a"
                  noWrap
                  onClick={() => {navigate('/')}}
                >
                  {Constants.COMPANY_NAME}
                </LogoComputer>
                <PageLinksComputer>
                  <Stack direction="row" spacing={2} margin={1}>
                    {pages.map((page) => (
                      <AppBarButton
                      label={page.title}
                      key={page.title}
                      onClick={() => {
                        window.open(page.link);
                      }}>
                      </AppBarButton>
                    ))}
                  </Stack>
                </PageLinksComputer>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    );
  }

  export default ResponsiveAppBar;
