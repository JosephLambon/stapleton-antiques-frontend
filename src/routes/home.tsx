import { useTheme } from '@mui/material/styles';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { MainBackground } from '../components/Common.styling';
import AppBar from '../components/NavigationBar/NavigationBar';

function Home() {
  // const theme = useTheme();

  return (
    <>
      <MainBackground>
        <AppBar />
        <Container maxWidth='lg'>
          <Outlet />
        </Container>
      </MainBackground>
    </>
  )
}

export default Home;