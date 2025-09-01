import { antiqueItemData as antiques } from '../common/variables';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function StandardImageList( ) {
    const theme = useTheme();
    const onMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
    return (
    <ImageList
        sx={{
            width: '100%',
            height: '100%'
        }}
        cols={onMobile ? 1 : 3}
        gap={10} >
            {antiques.map((item) => (
                <ImageListItem key={item.img}>
                <img
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                />
                </ImageListItem>
            ))}
    </ImageList>
  );
}


