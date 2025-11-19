import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import AntiqueGallery from '../../components/AntiqueGallery/AntiqueGallery';
import { OutletContainer } from '../../components/Common/Common.styling';
import { HideableNavigationBar } from '../../components/NavigationBar/NavigationBar';
import Filter from '../../components/Common/Filter';

const Gallery = () => {
  const theme = useTheme();
  const onMobile: boolean = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
      <>
        <HideableNavigationBar />
        <Box sx={{
            background:
              'radial-gradient(circle at center, rgba(0,0,0,0) 66%, rgba(0,0,0,1) 100%)'
            }}
            >
        <Box
          sx={{
            width: '100%',
            height: '78vh',
            marginTop: '-2vh',
            backgroundImage: 'url(https://sastapletonantiques.blob.core.windows.net/antique-image-container/background.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',

            display: 'flex',
            justifyContent:'center',
            alignItems: 'end',
            pb: onMobile ? 14 : 10,
          }}
        >
          <Typography variant='h1' color='textPrimary'
            sx={{
              textShadow: '-15px 5px 20px #000000ad'
            }}
          >
            Stapleton Antiques
          </Typography>
        </Box>
        </Box>

        <OutletContainer maxWidth='lg'>
          <Box sx={{px:1, pb:1, pt: onMobile? 10 : 6, display: 'flex', justifyContent: 'space-between', alignContent: 'center'}}>
            <Typography  variant={onMobile ? 'h2' : 'h3'}>Our latest</Typography>
            <Filter />
          </Box>
          <AntiqueGallery />
        </OutletContainer>
      </>
  )
}

export default Gallery;