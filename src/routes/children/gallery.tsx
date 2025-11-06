import {useTheme} from '@mui/material/styles';
import { Typography } from '@mui/material';
import AntiqueGallery from '../../components/AntiqueGallery/AntiqueGallery';

function Gallery() {
  const theme = useTheme();
  return (
      <>
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
        </>
  )
}

export default Gallery;