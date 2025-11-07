import {styled} from '@mui/material/styles';
import { Box, type BoxProps } from '@mui/material';

export const CenteringWrapper = styled(Box)<BoxProps>(({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100vh'
}))