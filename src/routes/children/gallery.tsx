import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import AntiqueGallery from '../../components/AntiqueGallery/AntiqueGallery';
import { OutletContainer } from '../../components/Common/Common.styling';

const Gallery = () => {
  const theme = useTheme();
  const onMobile: boolean = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
      <>
      <Box
        sx={{
          width: '100%',
          height: '78vh',
          marginTop: '-5vh',
          backgroundImage: 'url(https://sastapletonantiques.blob.core.windows.net/antique-image-container/background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          
          display: 'flex',
          justifyContent:'center',
          alignItems: 'end',
          pb: onMobile ? 20 : 10
        }}
      >
        <Typography variant='h2' color='textPrimary'
          sx={{
            textShadow: '-15px 5px 20px #000000ad'
          }}
        >
          Decorative Antiques
        </Typography>
      </Box>

        <OutletContainer maxWidth='lg'>
          <AntiqueGallery />
        </OutletContainer>
      </>
  )
}

export default Gallery;