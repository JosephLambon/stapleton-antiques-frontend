import { styled } from '@mui/material/styles';
import Box, { type BoxProps } from '@mui/material/Box';

export const AntiqueGalleryErrorWrapper = styled(Box)<BoxProps>(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    marginTop: '5vh',
    marginBottom: '5vh'
}));

export const ErrorMessageWrapper = styled(Box)<BoxProps>(() => ({
    padding: '32px',
    borderRadius: '2%',
    backgroundColor: 'rgba(255, 0, 0, 0.4)'
}));

export const ErrorMessage = styled(Box)<BoxProps>(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px'
}));