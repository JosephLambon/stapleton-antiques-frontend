import {styled} from '@mui/material/styles';
import { Box, type BoxProps } from '@mui/material';

export const CenteringWrapper = styled(Box)<BoxProps>(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100vh'
}))