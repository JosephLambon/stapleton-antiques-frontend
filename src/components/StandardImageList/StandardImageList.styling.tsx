import { styled } from '@mui/material/styles';
import ImageList, { type ImageListProps } from '@mui/material/ImageList';
import ImageListItem, { type ImageListItemProps } from '@mui/material/ImageListItem';

interface ImageListItemPropsSliding extends ImageListItemProps {
  isVisible?: boolean;
}

export const ImageListHiddenOverflow = styled(ImageList)<ImageListProps>(({theme}) => ({
    overflowY: 'visible',
    height: 'auto'
}));


export const ImageListItemSliding = styled(ImageListItem, {
  shouldForwardProp: (prop) => prop !== "isVisible"
})<ImageListItemPropsSliding>(({theme, isVisible}) => ({
    '&:hover': {
        cursor: 'pointer',
    },
    transform: isVisible ? 'translateY(0)' : 'translateY(10%)',
    transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)'
}));
