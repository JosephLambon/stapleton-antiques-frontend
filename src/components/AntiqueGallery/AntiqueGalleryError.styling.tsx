import { styled, alpha } from '@mui/material/styles';
import Box, { type BoxProps } from '@mui/material/Box';
import ImageListItem, { type ImageListItemProps } from '@mui/material/ImageListItem';
import ImageListItemBar, { type ImageListItemBarProps } from '@mui/material/ImageListItemBar';

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
    borderRadius: '1%',
    backgroundColor: 'rgba(255, 0, 0, 0.05)'
}));

export const ErrorMessage = styled(Box)<BoxProps>(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px'
}));