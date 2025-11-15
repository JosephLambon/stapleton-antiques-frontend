import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import { GetAntiqueById } from '../../services/antiqueService';
import { useLoaderData, type LoaderFunctionArgs } from 'react-router-dom';
import ImageCarousel from '../Carousel/Carousel';
import { useEffect } from 'react';
import type { Antique } from '../../services/models/antique';
import NavigateBack from './NavigateBack';
import { CarouselWrapperMobile, GridWrapperDesktop } from './AntiqueDetails.styling';
import ExpandableMarkdown from './ExpandableMarkdown';

interface AntiqueLoaderParams {
  id: string;
}

export async function loader({ params }: LoaderFunctionArgs<AntiqueLoaderParams>) {
  const antique = await GetAntiqueById(Number(params.id));
  if (!antique) {
    throw new Response("", {
      status: 404,
      statusText: "Antique Not Found"
    });
  }
  console.log(antique.description);
  return { antique };
}


function AntiqueDetails() {
  const theme = useTheme();
  const onMobile: boolean = useMediaQuery(theme.breakpoints.down('sm'));
  
  const { antique } : { antique : Antique } = useLoaderData();

  const toEmail: string = "joe.lambon25@gmail.com";
  const subject: string = encodeURIComponent(`Enquiry - ${antique.name}`);
  const body: string = encodeURIComponent(`Hi,\n\nI would like to enquire about your listing '${antique.name}' (#${antique.id}). \n\n`);
  
    useEffect(() => {
        // Scroll the window to the top whenever the pathname changes
        window.scrollTo(0, 0);
      }, []);
    const formattedPrice = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(
      antique.price,
    )
    
    return (
        <>
            {onMobile ? (
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '85dvh',
                my: 1
              }}>
                <NavigateBack label={antique.name} />
                <CarouselWrapperMobile>
                    <ImageCarousel images={antique.images} />
                </CarouselWrapperMobile>
                <Box sx={{
                        px: 0,
                        my: 1,
                        textAlign: 'left',
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: 1
                      }}>
                  <Typography sx={{mb:1}} variant='h4'><b>{antique.name}</b></Typography>
                  <Typography sx={{mt:1}} variant='h4'><b>{formattedPrice}</b></Typography>
                  <Typography sx={{ mb: 2, color: theme.palette.text.secondary}} variant='h6'>
                    <b>or best offer</b>
                  </Typography>
                  <ExpandableMarkdown description={antique.description} />
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                  <Button onClick={() => window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`} sx={{width: '100%', alignSelf: 'flex-end', my: 2}} size='large' variant='contained' color="secondary">
                    Enquire
                  </Button>
              </Box>
              ) : (
                <>
                  <NavigateBack label={antique.name} />
                  <GridWrapperDesktop >
                      <ImageCarousel images={antique.images} />
                      <Box sx={{
                        px: 5,
                      }}>
                          <Typography sx={{my:1}} variant='h4'><b>{antique.name}</b></Typography>
                            <Typography sx={{mt:1}} variant='h4'><b>{formattedPrice}</b></Typography>
                            <Typography sx={{ mb: 2, color: theme.palette.text.secondary}} variant='h6'>
                              <b>or best offer</b>
                            </Typography>
                          <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
                            <Button sx={{
                              mb:4,
                              width: '100%'
                              }} size='medium' variant='contained' color="secondary"
                              onClick={() => window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`}>
                                Enquire
                              </Button>
                          </Box>
                          <ExpandableMarkdown description={antique.description} />
                      </Box>
                  </GridWrapperDesktop>
                </>
              )
            }
        </>
    )
}

export default AntiqueDetails;