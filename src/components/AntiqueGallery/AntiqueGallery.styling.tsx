import { styled, alpha } from '@mui/material/styles';
import ImageList, { type ImageListProps } from '@mui/material/ImageList';
import ImageListItem, { type ImageListItemProps } from '@mui/material/ImageListItem';
import ImageListItemBar, { type ImageListItemBarProps } from '@mui/material/ImageListItemBar';

interface AntiqueGalleryItemProps extends ImageListItemProps {
  isVisible?: boolean;
}

export const AntiqueGalleryWrapper = styled(ImageList)<ImageListProps>(({theme}) => ({
    overflowY: 'visible',
    height: 'auto'
}));


export const GalleryCard = styled(ImageListItem, {
  shouldForwardProp: (prop) => prop !== "isVisible"
})<AntiqueGalleryItemProps>(({theme, isVisible}) => ({
    '&:hover': {
        cursor: 'pointer',
    },
    transform: isVisible ? 'translateY(0)' : 'translateY(5%)',
    transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)'
}));

export const CaptionComputer = styled(ImageListItemBar)<ImageListItemBarProps>(({theme}) =>({
    backgroundColor: alpha(theme.palette.primary.main, 0.25),
    visibility: 'hidden',
    '.MuiImageListItem-root:hover &': {
      visibility: 'visible'
    },
    height: '100%',
    width: '100%'
}))