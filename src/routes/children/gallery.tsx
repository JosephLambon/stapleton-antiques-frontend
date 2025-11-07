import {useTheme} from '@mui/material/styles';
import { Typography } from '@mui/material';
import AntiqueGallery from '../../components/AntiqueGallery/AntiqueGallery';

function Gallery() {
  const theme = useTheme();
  return (
      <>
          <AntiqueGallery />
        </>
  )
}

export default Gallery;