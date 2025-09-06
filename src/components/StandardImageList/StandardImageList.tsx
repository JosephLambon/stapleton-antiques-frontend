import { antiqueItemData as antiques } from '../../common/variables';
import { ImageListHiddenOverflow, ImageListItemSliding } from './StandardImageList.styling';
import ImageListItem from '@mui/material/ImageListItem';
import { ImageListItemBar, useMediaQuery, Fade, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';


import useOnScreen from '../../hooks/useOnScreen';

export default function StandardImageList( ) {
    const theme = useTheme();
    const onMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (   
            <ImageListHiddenOverflow
            cols={onMobile ? 1 : 3}
            gap={onMobile ? 20 : 10}
            >
                {antiques.map((item, index) => {
                    const [containerRef, isVisible] = useOnScreen({
                        root: null,
                        rootMargin: "0px 0px 0px 0px",
                        threshold: onMobile ? 0.2 : 0.4
                    })
                    return (    
                        <Fade
                        key={`wrapper-antique-${index}`}
                        appear={true}        
                        timeout={onMobile ? 800 : 1000}
                        in={isVisible}
                        >
                            <Box
                            ref={containerRef}
                            >
                                <ImageListItemSliding
                                isVisible = {isVisible}
                                >
                                    <img
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                    />
                                    <ImageListItemBar
                                    title={item.title}
                                    subtitle='£50'
                                    position={onMobile ? 'below' : 'bottom'}
                                    />                                        
                                </ImageListItemSliding>    
                            </Box>
                        </Fade>
                    )
                })}
            </ImageListHiddenOverflow>
  );
}