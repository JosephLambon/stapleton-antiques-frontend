import { Box, Typography } from '@mui/material';
import { GetAntiqueById } from '../../services/antiqueService';
import { useLoaderData } from 'react-router-dom';
import ImageCarousel from '../Carousel/Carousel';

export async function loader({ params }) {
  const antique = await GetAntiqueById(params.id);
  if (!antique) {
    throw new Response("", {
      status: 404,
      statusText: "Antique Not Found"
    });
  }
  return { antique };
}

function AntiqueDetails() {
    const { antique } = useLoaderData();

    return (
        <>
            <Typography variant='h1' sx={{textAlign: 'center', mt: 3}}>
                 {antique.name}
            </Typography>
            <Box sx={{mb: 5, py: 5}}>
                <ImageCarousel images={antique.images} />
            </Box>
        </>
    )
}

export default AntiqueDetails;