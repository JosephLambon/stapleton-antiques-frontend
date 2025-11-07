import { 
    AntiqueGalleryWrapper,
} from '../AntiqueGallery/AntiqueGallery.styling';
import { Skeleton, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CONSTANTS from '../../common/constants';
import { GetAntiquesByStatus } from '../../services/AntiqueService';
import { useQuery } from "@tanstack/react-query";

import { AntiqueGalleryItem } from './AntiqueGalleryItem';
import { AntiqueGallerySkeleton } from "./AntiqueGallerySkeleton";
import { AntiqueGalleryError } from "./AntiqueGalleryError";

export default function AntiqueGallery() {
    const theme = useTheme();
    const onMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const {
          data: antiques,
          error,
          isLoading,
        } = useQuery({
          queryKey: ["antiquesData"],
          queryFn: () => GetAntiquesByStatus(true,true,true),
          gcTime: 60 * 60 * 1000,          // Bin cache after 5 mins,
          staleTime: 30 * 60 * 1000        // Data considered stale after 30 min, will refetch & update cache in background
      });

    return (   
      isLoading? (
        <AntiqueGalleryWrapper
        cols={onMobile ? CONSTANTS.MOBILE.GALLERY_COLUMNS : CONSTANTS.LARGER_SCREENS.GALLERY_COLUMNS}
        gap={onMobile ? CONSTANTS.MOBILE.GALLERY_GAP : CONSTANTS.LARGER_SCREENS.GALLERY_GAP}
        rowHeight={300}
        >
          {Array.from({ length: onMobile ? CONSTANTS.MOBILE.SKELETON_COUNT : CONSTANTS.LARGER_SCREENS.SKELETON_COUNT }).map((_, idx) => (
            <AntiqueGallerySkeleton key={idx} />
          ))}
        </AntiqueGalleryWrapper>
      ) : error? (
        <AntiqueGalleryError />
      ) : (
        <AntiqueGalleryWrapper
            cols={onMobile ? CONSTANTS.MOBILE.GALLERY_COLUMNS : CONSTANTS.LARGER_SCREENS.GALLERY_COLUMNS}
            gap={onMobile ? CONSTANTS.MOBILE.GALLERY_GAP : CONSTANTS.LARGER_SCREENS.GALLERY_GAP}
            rowHeight={240}
            >
              {antiques.map((antique) => (
                  <AntiqueGalleryItem
                  key={antique.id}
                  item={antique}
                  onMobile={onMobile}
                  />
              ))}
        </AntiqueGalleryWrapper>
      )
  )
}