import { Box, Typography } from '@mui/material';
import AntiqueGallery from '../../components/AntiqueGallery/AntiqueGallery';
import { OutletContainer } from '../../components/Common/Common.styling';

const Gallery = () => {
  return (
      <>
      <Box
        sx={{
          width: '100%',
          height: '80vh',
          backgroundImage: 'url(https://sastapletonantiques.blob.core.windows.net/antique-image-container/background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          
          display: 'flex',
          justifyContent:'center',
          alignItems: 'end',
          pb: 25,
          mb: 5
        }}
      >
        <Typography variant='h2' color='textPrimary'
          sx={{
            textShadow: '-15px 5px 20px #000000ff',
            px: 1
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