import { antiqueItemData as antiques } from '../common/variables';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { ImageListItemBar, useMediaQuery, Slide, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import useOnScreen from '../hooks/useOnScreen';

export default function StandardImageList( ) {
    const theme = useTheme();
    const onMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (        
        <ImageList
        sx={{
            overflowY: 'hidden'
        }}
        cols={onMobile ? 1 : 3}
        gap={onMobile ? 20 : 10} >
            {antiques.map((item, index) => {
                const [containerRef, isVisible] = useOnScreen({
                    root: null,
                    rootMargin: "0px",
                    threshold: onMobile ? 0.1 : 0
                })

                return (
                    <Slide
                        key={`wrapper_antique_${index}`}
                        direction='up'
                        timeout={onMobile ? 1000 : 1500}
                        in={isVisible}
                    >
                        <Box ref={containerRef}>
                            <ImageListItem 
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
                        </Box>
                    </Slide>
                )
            })}
    </ImageList>
  );
}


