import { Fade, Box, ImageListItemBar } from "@mui/material";
import { GalleryCard, CaptionComputer } from "./AntiqueGallery.styling";
import useOnScreen from "../../hooks/useOnScreen";
import CONSTANTS from "../../common/constants";
import type { Antique } from "../../services/models/antique";

interface GalleryItemProps {
  item: Antique;
  onMobile: boolean;
}

export function AntiqueGalleryItem({ item, onMobile }: GalleryItemProps) {
  const [containerRef, isVisible] = useOnScreen({
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: onMobile ? CONSTANTS.MOBILE.SCREEN_THRESHOLD : CONSTANTS.LARGER_SCREENS.SCREEN_THRESHOLD
  });

  return (
    <Fade
    appear
    timeout={CONSTANTS.FADE_TIMEOUT}
    in={isVisible}
    >
      <Box ref={containerRef}
      sx={{backgroundColor: 'transparent' }}>
        <GalleryCard
        sx={{backgroundColor: 'transparent'}}
        isVisible={isVisible}>
          <img
            srcSet={`https://sastapletonantiques.blob.core.windows.net/antique-image-container/${item.thumbnail}?sp=r&st=2025-11-05T06:03:09Z&se=2040-11-05T14:18:09Z&spr=https&sv=2024-11-04&sr=c&sig=%2BdtoXfmw8O%2BYt5eFMVqIN2Zbguk%2BLZ47yiDhffkvU4w%3D&w=300&fit=crop&auto=format&dpr=2 2x`}
            src={`https://sastapletonantiques.blob.core.windows.net/antique-image-container/${item.thumbnail}?sp=r&st=2025-11-05T06:03:09Z&se=2040-11-05T14:18:09Z&spr=https&sv=2024-11-04&sr=c&sig=%2BdtoXfmw8O%2BYt5eFMVqIN2Zbguk%2BLZ47yiDhffkvU4w%3D&w=300&fit=crop&auto=format`}
            alt={item.name}
            loading="lazy"
          />
          {onMobile ? null
          // (
          //   <ImageListItemBar
          //   title={item.name}
          //   subtitle={"£" + item.price}
          //   position="below" 
          //   sx={{
          //     backgroundColor: 'transparent', // match your page background
          //   }}
          //   />
          // )
           : (
            <CaptionComputer
            title={item.name}
            subtitle={item.price}
            position="bottom" />
          )}
        </GalleryCard>
      </Box>
    </Fade>
  );
}
