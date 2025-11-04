import {useTheme} from '@mui/material/styles';
import { Container, Typography } from '@mui/material';
import { MainBackground } from '../components/Common.styling';
import AppBar from '../components/NavigationBar/NavigationBar';
import AntiqueGallery from '../components/AntiqueGallery/AntiqueGallery';
import { GetAntiquesByStatus } from '../services/antiqueService';
import { useQuery } from "@tanstack/react-query";

function Home() {
  const theme = useTheme();
  
  const {
      data: antiques,
      error,
      isLoading,
    } = useQuery({
      queryKey: ["antiquesData"],
      queryFn: () => GetAntiquesByStatus(true,true,true),
      gcTime: 5 * 60 * 1000, // Bin cache after 5 mins,
      staleTime: 1 * 60 * 1000 // Data considered stale after 1 min, will refetch & update cache in background
  });

  if (isLoading) return <div>Fetching posts...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
      <>
      <MainBackground>
        <AppBar />
        <Container
        maxWidth='lg'
        >
          <Typography variant='body1' sx={{ height: 'auto', m:'5vh 0px 5vh 0px', textAlign: 'center', color: theme.palette.text.secondary}}>
            {antiques && antiques.length > 0 ? ( 
              antiques.map((item) => (
                <div key={item.id}>
                  <h6>{item.name}</h6>
                  <p>{item.description}</p>
                  <p>{item.price}</p>
                </div>
              ))
            ) : (
              <p>No antiques found.</p>
            )}
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