import { Fade, Box, ImageListItemBar } from "@mui/material";
import { GalleryCard, CaptionComputer } from "./AntiqueGallery.styling";
import useOnScreen from "../../hooks/useOnScreen";
import CONSTANTS from "../../common/constants";

interface GalleryItemProps {
  item: {
    img: string;
    title: string;
  };
  onMobile: boolean;
}

export function AntiqueGalleryItem({ item, onMobile }: GalleryItemProps) {
  const [containerRef, isVisible] = useOnScreen({
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: CONSTANTS.SCREEN_THRESHOLD
  });

  return (
    <Fade
    appear
    timeout={CONSTANTS.FADE_TIMEOUT}
    in={isVisible}
    >
      <Box
      ref={containerRef}>
        <GalleryCard
        isVisible={isVisible}>
          <img
            style={{ borderRadius: "1%" }}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          {onMobile ? (
            <ImageListItemBar
            title={item.title}
            subtitle="£50"
            position="below" />
          ) : (
            <CaptionComputer
            title={item.title}
            subtitle="£50"
            position="bottom" />
          )}
        </GalleryCard>
      </Box>
    </Fade>
  );
}
