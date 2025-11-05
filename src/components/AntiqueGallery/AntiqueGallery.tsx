import { antiqueItemData as antiques } from '../../common/variables';
import { 
    AntiqueGalleryWrapper,
} from '../AntiqueGallery/AntiqueGallery.styling';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CONSTANTS from '../../common/constants';
import { GetAntiquesByStatus } from '../../services/antiqueService';
import { useQuery } from "@tanstack/react-query";

import { AntiqueGalleryItem } from './AntiqueGalleryItem';

export default function AntiqueGallery( ) {
    const theme = useTheme();
    const onMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const {
          data: antiques,
          error,
          isLoading,
        } = useQuery({
          queryKey: ["antiquesData"],
          queryFn: () => GetAntiquesByStatus(true,true,true),
          gcTime: 5 * 60 * 1000,          // Bin cache after 5 mins,
          staleTime: 1 * 60 * 1000        // Data considered stale after 1 min, will refetch & update cache in background
      });

    return (   
            <AntiqueGalleryWrapper
            cols={onMobile ? CONSTANTS.MOBILE.GALLERY_COLUMNS : CONSTANTS.LARGER_SCREENS.GALLERY_COLUMNS}
            gap={onMobile ? CONSTANTS.MOBILE.GALLERY_GAP : CONSTANTS.LARGER_SCREENS.GALLERY_GAP}
            rowHeight={300}
            >
                {
                isLoading? <p>Fetching posts...</p> : 
                antiques.map((antique) => (
                    <AntiqueGalleryItem
                    key={antique.id}
                    item={antique}
                    onMobile={onMobile}
                    />
                ))}
            </AntiqueGalleryWrapper>
  );
}