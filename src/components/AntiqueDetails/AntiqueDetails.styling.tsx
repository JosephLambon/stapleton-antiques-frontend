import {styled} from '@mui/material/styles';
import { Box, type BoxProps } from '@mui/material';

export const CarouselWrapperMobile = styled(Box)<BoxProps>(() => ({
    width: '100%',
    position: 'relative', // Moves dots below carousel
    paddingBottom: '30px' // distance dots to image
}))

export const GridWrapperDesktop = styled(Box)<BoxProps>(() => ({
    display: 'grid',
    gridTemplateColumns: '4fr 2fr',
    gridAutoRows: 'minmax(100px, auto)' // define min & max for rows
    , position: 'relative' // Moves dots to below carousel
    , paddingBottom: '30px' // distance dots to image
    , paddingRight: '50px' // distance dots from right clumn
    , alignItems: 'start'
}))

