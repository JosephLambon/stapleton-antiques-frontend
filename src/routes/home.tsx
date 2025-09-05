import { Container, Typography } from '@mui/material';
import AppBar from '../components/AppBar';
import StandardImageList from '../components/StandardImageList';

function Home() {
  return (
    <>
      <AppBar />
      <Container maxWidth='lg' >
        <Typography sx={{ height: '40vh',mt: 3, textAlign: 'center', fontSize:'21px', color: 'rgb(129, 129, 129)'}}>
          No one shall be subjected to arbitrary arrest, detention or exile.
Everyone is entitled in full equality to a fair and public hearing by an independent and impartial tribunal, in the determination of his rights and obligations and of any criminal charge against him.
No one shall be subjected to arbitrary interference with his privacy, family, home or correspondence, nor to attacks upon his honour and reputation. Everyone has the right to the protection of the law against such interference or attacks.
        </Typography>
        <StandardImageList />
        <Typography 
        sx={{
          p: 5,
          m: 3, 
          textAlign: 'center',
          fontSize:'48px', 
          color: 'rgb(129, 129, 129)'
        }}
          >
          Footer placeholder
        </Typography>
      </Container>
    </>
  )
}

export default Home