import { Fade, Box, ImageListItemBar } from "@mui/material";
import { GalleryCard, CaptionComputer } from "./AntiqueGallery.styling";
import useOnScreen from "../../hooks/useOnScreen";
import CONSTANTS from "../../common/constants";
import type { Antique } from "../../services/models/antique";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  return (
    <Fade
    appear
    timeout={CONSTANTS.FADE_TIMEOUT}
    in={isVisible}
    >
      <Box ref={containerRef}>
        <GalleryCard
        isVisible={isVisible}
        onClick={() => 
          navigate(`/antique/${item.id}`)
        }
        sx={{ // Vignette
          '&::after': {
            content: '""',  
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at center, rgba(0,0,0,0) 60%, rgba(0,0,0,0.8) 100%)',
            pointerEvents: 'none',
          }
        }}>
          <img
            srcSet={`https://sastapletonantiques.blob.core.windows.net/antique-image-container/${item.thumbnail}?w=300&fit=crop&auto=format&dpr=2 2x`}
            src={`https://sastapletonantiques.blob.core.windows.net/antique-image-container/${item.thumbnail}?w=300&fit=crop&auto=format`}
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
