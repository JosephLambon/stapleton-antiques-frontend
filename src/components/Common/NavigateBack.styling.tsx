import {styled} from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Typography, type TypographyProps } from '@mui/material';

export const PaddedArrowBackIcon = styled(ArrowBackIcon)(() => ({
    marginRight: '2%'
}))

interface NavigateBackWrapperProps extends TypographyProps {
    onMobile: boolean
}

export const NavigateBackWrapper = styled(Typography)<NavigateBackWrapperProps>(({theme, onMobile}) => ({
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    cursor: onMobile ? 'auto' : 'pointer'
}))