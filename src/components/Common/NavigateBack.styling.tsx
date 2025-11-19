import {styled} from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Typography, type TypographyProps } from '@mui/material';

export const PaddedArrowBackIcon = styled(ArrowBackIcon)(() => ({
    marginRight: '2%'
}))

export const NavigateBackWrapper = styled(Typography)<TypographyProps>(({theme}) => ({
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    cursor: 'pointer'
}))