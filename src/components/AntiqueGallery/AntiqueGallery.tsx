import { antiqueItemData as antiques } from '../../common/variables';
import { 
    AntiqueGalleryWrapper,
} from '../AntiqueGallery/AntiqueGallery.styling';
import { Skeleton, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CONSTANTS from '../../common/constants';
import { GetAntiquesByStatus } from '../../services/antiqueService';
import { useQuery } from "@tanstack/react-query";

import { AntiqueGalleryItem } from './AntiqueGalleryItem';
import { AntiqueGallerySkeleton } from "./AntiqueGallerySkeleton";

const SKELETON_COUNT = 8;

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
          gcTime: 60 * 60 * 1000,          // Bin cache after 5 mins,
          staleTime: 30 * 60 * 1000        // Data considered stale after 30 min, will refetch & update cache in background
      });

    return (   
            <AntiqueGalleryWrapper
            cols={onMobile ? CONSTANTS.MOBILE.GALLERY_COLUMNS : CONSTANTS.LARGER_SCREENS.GALLERY_COLUMNS}
            gap={onMobile ? CONSTANTS.MOBILE.GALLERY_GAP : CONSTANTS.LARGER_SCREENS.GALLERY_GAP}
            rowHeight={300}
            >
              {
                 isLoading? (
                    Array.from({ length: SKELETON_COUNT }).map((_, idx) => (
                      <AntiqueGallerySkeleton key={idx} />
                    ))
                  ) : (
                  // error? <p>Error fetching posts.</p> : (
                  antiques.map((antique) => (
                      <AntiqueGalleryItem
                      key={antique.id}
                      item={antique}
                      onMobile={onMobile}
                      />
                  )))
                // )
              }
            </AntiqueGalleryWrapper>
  );
}