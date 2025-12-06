import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import AntiqueGallery from '../../components/AntiqueGallery/AntiqueGallery';
import { OutletContainer } from '../../components/Common/Common.styling';
import { HideableNavigationBar } from '../../components/NavigationBar/NavigationBar';
import Filter from '../../components/Common/Filter';
import useStatusContext from '../../hooks/useStatusContext';

const Gallery = () => {
  const theme = useTheme();
  const onMobile: boolean = useMediaQuery(theme.breakpoints.down('sm'));
  const { selectedStatuses, setSelectedStatuses } = useStatusContext();

  return (
      <>
        <HideableNavigationBar />
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
                whiteSpace: 'nowrap',  // ensures single line
                px: 1,
                textShadow: '-15px 5px 20px #000000ad',
                textAlign: 'center',
                '@media (max-width: 600px)': {
                  fontSize: 'clamp(1.8rem, 95vw, 3rem)',
                }
              }}
            >
              Stapleton Antiques
            </Typography>
        </Box>

        <OutletContainer maxWidth='lg'>
          <Box sx={{px:1, pb:1, pt: onMobile? 10 : 6, display: 'flex', justifyContent: 'space-between', alignContent: 'center'}}>
            <Typography  variant={onMobile ? 'h2' : 'h3'}>Our latest</Typography>
            <Filter selectedStatuses={selectedStatuses} onChangeStatuses={setSelectedStatuses} />
          </Box>
          <AntiqueGallery currentStatuses={selectedStatuses} />
        </OutletContainer>
      </>
  )
}

export default Gallery;