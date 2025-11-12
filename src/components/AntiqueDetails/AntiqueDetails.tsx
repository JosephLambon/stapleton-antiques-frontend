import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { GetAntiqueById } from '../../services/antiqueService';
import { useLoaderData, useNavigate } from 'react-router-dom';
import ImageCarousel from '../Carousel/Carousel';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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
  const navigate = useNavigate();
  const theme = useTheme();
  const onMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const formattedPrice = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(
      antique.price,
    )

    
    return (
        <>
            {onMobile ? (
              <>
                <Typography 
                variant='body1'
                sx={{display: 'flex', justifyContent:'left', alignItems: 'center', my:2}}
                onClick={() => 
                    navigate(-1)
                }
                >
                  <ArrowBackIcon sx={{mx:1}} />
                  {antique.name}
                </Typography>
                <Box sx={{
                  width: '100%',
                  mt: 0,
                  position: 'relative', // Moves dots to below carousel
                  paddingBottom: '30px' // distance dots to image
                }}>
                    <ImageCarousel images={antique.images} />
                </Box>
                <Box sx={{
                        px: 0,
                        my: 1,
                        textAlign: 'left'
                      }}>
                  <Typography sx={{mb:1}} variant='h4'><b>{antique.name}</b></Typography>
                  <Typography sx={{mt:1}} variant='h4'><b>{formattedPrice}</b></Typography>
                  <Typography sx={{ mb: 2, color: theme.palette.text.secondary}} variant='h6'><b>or best offer</b></Typography>
                  <Typography sx={{lineHeight: 1.5}}>{antique.description}</Typography>
                </Box>
              </>
              ) : (
                  <Box sx={{
                    my: 5,
                    display: 'grid',
                    gridTemplateAreas: 'carousel-left details-right',
                    gridTemplateColumns: '4fr 2fr', // 60% to 40% ratio 
                    gridAutoRows: 'minmax(100px, auto)' // flexible row
                      , position: 'relative' // Moves dots to below carousel
                      , paddingBottom: '30px' // distance dots to image
                      , paddingRight: '50px' // distance dots to image
                  }}>
                      <ImageCarousel images={antique.images} />
                      <Box sx={{
                        px: 5
                      }}>
                          <Typography sx={{my:1}} variant='h4'><b>{antique.name}</b></Typography>
                          <Typography sx={{mt:1}} variant='h4'><b>{formattedPrice}</b></Typography>
                          <Typography sx={{ mb: 2, color: theme.palette.text.secondary}} variant='h6'><b>or best offer</b></Typography>
                          <Typography sx={{lineHeight: 1.5}}>{antique.description}</Typography>
                      </Box>
                  </Box>
              )
            }
        </>
    )
}

export default AntiqueDetails;