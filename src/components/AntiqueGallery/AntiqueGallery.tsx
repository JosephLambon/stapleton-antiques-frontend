import { antiqueItemData as antiques } from '../../common/variables';
import { 
    AntiqueGalleryWrapper,
} from './AntiqueGallery.styling';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CONSTANTS from '../../common/constants';

import { AntiqueGalleryItem } from './AntiqueGalleryItem';

export default function AntiqueGallery( ) {
    const theme = useTheme();
    const onMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (   
            <AntiqueGalleryWrapper
            cols={onMobile ? CONSTANTS.MOBILE.GALLERY_COLUMNS : CONSTANTS.LARGER_SCREENS.GALLERY_COLUMNS}
            gap={onMobile ? CONSTANTS.MOBILE.GALLERY_GAP : CONSTANTS.LARGER_SCREENS.GALLERY_GAP}
            >
                {antiques.map((item) => (
                    <AntiqueGalleryItem
                    key={item.img}
                    item={item}
                    onMobile={onMobile}
                    />
                ))}
            </AntiqueGalleryWrapper>
  );
}