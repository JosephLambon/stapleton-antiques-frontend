import { antiqueItemData as antiques } from '../common/variables';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { ImageListItemBar, useMediaQuery, Slide } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import useOnScreen from '../helpers/useOnScreen';

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
            {antiques.map((item, index) => {
                const [containerRef, isVisible] = useOnScreen({
                    root: null,
                    rootMargin: "0px",
                    threshold: 0.1
                })
                return (
                    <Slide
                    key={`slide_${index}`}
                    mountOnEnter
                    unmountOnExit
                    direction='up'
                    timeout={500}
                    in={isVisible}>
                        <ImageListItem 
                        ref={containerRef}
                        sx={{
                            '&:hover': {
                                cursor: 'pointer',
                            },
                        }}
                        >
                            <img
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                        <ImageListItemBar
                                title={item.title}
                            />
                        </ImageListItem>
                    </Slide>
                )
            })}
    </ImageList>
  );
}


