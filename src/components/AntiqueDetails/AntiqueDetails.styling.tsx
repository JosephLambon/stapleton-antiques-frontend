import {alpha, styled} from '@mui/material/styles';
import { Box, Button, Typography, type BoxProps, type ButtonProps, type TypographyProps } from '@mui/material';

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

export const FlexColumnWrapper = styled(Box)<BoxProps>(() => ({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '85dvh',
    my: 1
}))

export const FlexGrowSpacer = styled(Box)<BoxProps>(() => ({
    flexGrow: 1
}))

interface ReactiveBoxProps extends BoxProps {
    onMobile: boolean
}

export const ItemName = styled(Typography)<TypographyProps>(({theme}) => ({
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
}))

export const Price = styled(Typography)<TypographyProps>(({theme}) => ({
    marginTop: theme.spacing(1)
}))

export const OrBestOffer = styled(Typography)<TypographyProps>(({ theme}) => ({
    marginBottom: theme.spacing(2),
    color: theme.palette.text.secondary
}))

export const Sold = styled(Typography)<TypographyProps>(({theme}) => ({
    padding: theme.spacing(1),
    backgroundColor: alpha(theme.palette.primary.light, 1),
    marginTop: theme.spacing(2),
    width: '33%',
    minWidth: '80px',
    textAlign: 'center',
    textShadow: '-15px 5px 20px #000000ff',
    borderRadius: '5px'
}))

export const InformationWrapper = styled(Box)<ReactiveBoxProps>(({onMobile, theme}) => ({
    paddingLeft: onMobile ? theme.spacing(0) : theme.spacing(5) ,
    paddingRight: onMobile ? theme.spacing(0) : theme.spacing(5),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1
}))

interface ReactiveButtonProps extends ButtonProps {
    onMobile: string
}

export const EnquireButton = styled(Button)<ReactiveButtonProps>(({onMobile, theme}) => ({
    alignSelf: onMobile ? 'flex-end' : 'auto',
    marginBottom: onMobile ? theme.spacing(2) : theme.spacing(4),
    marginTop: onMobile ? theme.spacing(2) : theme.spacing(0),
    width: '100%' 
}))