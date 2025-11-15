import { Box, Button, Typography, useMediaQuery, useTheme, type TypographyProps } from '@mui/material';
import { GetAntiqueById } from '../../services/antiqueService';
import { useLoaderData, useNavigate, type LoaderFunctionArgs } from 'react-router-dom';
import ImageCarousel from '../Carousel/Carousel';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEffect } from 'react';
import { MuiMarkdown } from 'mui-markdown';
import type { Antique } from '../../services/models/antique';

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
  const { antique } : { antique : Antique } = useLoaderData();
  const navigate = useNavigate();
  const theme = useTheme();
  const onMobile: boolean = useMediaQuery(theme.breakpoints.down('sm'));

  const toEmail: string = "joe.lambon25@gmail.com";
  const subject: string = encodeURIComponent(`Inquiry regarding ${antique.name}`);
  const body: string = encodeURIComponent(`Hi,\n\nAntique:  '${antique.name}'. \n\n`);
  
    useEffect(() => {
        // Scroll the window to the top whenever the pathname changes
        window.scrollTo(0, 0);
      }, []);
    const formattedPrice = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(
      antique.price,
    )
    const markdownOverrides = {
      p: {
        component: Typography as TypographyProps,
        props: { variant: "body1", paragraph: true, sx: { mb: 3 } }
      },
      ul: {
        component: 'ul' as any,
        props: { style: { marginBottom: '24px' } }
      }
    } as any;
    
    return (
        <>
            {onMobile ? (
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '85dvh',
                my: 1
              }}>
                <Typography 
                variant='body1'
                sx={{display: 'flex', justifyContent:'left', alignItems: 'center', my:2}}
                onClick={() => 
                    navigate(-1)
                }
                >
                  <ArrowBackIcon sx={{mr:1}} />
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
                  <MuiMarkdown overrides={markdownOverrides}>{antique.description}</MuiMarkdown>
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                  <Button onClick={() => window.location.href = `mailto:${toEmail}?subject=${subject}&body=${body}`} sx={{width: '100%', alignSelf: 'flex-end', my: 2}} size='large' variant='contained' color="secondary">
                    Enquire
                  </Button>
              </Box>
              ) : (
                <>
                  <Typography 
                  variant='body1'
                  sx={{
                    display: 'flex',
                    justifyContent:'left',
                    alignItems: 'center',
                    my:2,
                    cursor: 'pointer'}}
                  onClick={() => 
                      navigate(-1)
                  }
                  >
                    <ArrowBackIcon sx={{mr:1}} />
                    {antique.name}
                  </Typography>
                  <Box sx={{
                    // my: 5,
                    display: 'grid',
                    gridTemplateColumns: '4fr 2fr', // 60% to 40% ratio 
                    gridAutoRows: 'minmax(100px, auto)' // flexible row
                  , position: 'relative' // Moves dots to below carousel
                  , paddingBottom: '30px' // distance dots to image
                  , paddingRight: '50px' // distance dots to image
                  , alignItems: 'start'
                  }}>
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
                          <MuiMarkdown overrides={markdownOverrides}>{antique.description}</MuiMarkdown>
                      </Box>
                  </Box>
                  </>
              )
            }
        </>
    )
}

export default AntiqueDetails;