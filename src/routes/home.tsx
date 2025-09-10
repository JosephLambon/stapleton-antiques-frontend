import {useTheme} from '@mui/material/styles';
import { Container, Typography } from '@mui/material';
import { MainBackground } from '../components/Common.styling';
import AppBar from '../components/NavigationBar/NavigationBar';
import AntiqueGallery from '../components/AntiqueGallery/AntiqueGallery';

function Home() {
  const theme = useTheme();

  return (
      <>
      <MainBackground>
        <AppBar />
        <Container
        maxWidth='lg'
        >
          <Typography variant='body1' sx={{ height: '40vh', p:'25px 0px 0px 0px', textAlign: 'center', color: theme.palette.text.secondary}}>
            No one shall be subjected to arbitrary arrest, detention or exile.
  Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him.
  No one shall be subjected to arbitrary interference with his privacy, family, home or correspondence, nor to attacks upon his honour and reputation. Everyone has the right to the protection of the law against such interference or attacks.
          </Typography>
          <AntiqueGallery />
          <Typography 
          sx={{
            p: 5,
            m: 3, 
            textAlign: 'center',
            fontSize:'48px', 
            color: theme.palette.text.secondary
          }}
            >
            Footer placeholder
          </Typography>
        </Container>
      </MainBackground>
    </>
  )
}

export default Home;