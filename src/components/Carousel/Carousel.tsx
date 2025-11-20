import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './carousel.css';
import { useMediaQuery, useTheme } from '@mui/material';

// docs: https://www.npmjs.com/package/react-multi-carousel

type ImageCarouselProps = {
    images: string[];
}

function ImageCarousel({images} : ImageCarouselProps)
{
    const theme = useTheme();
    const onMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const breakpoints = theme.breakpoints.values;
    
    return (
        <Carousel
        additionalTransfrom={0}
        customTransition="all .3s ease-in-out" // duration of slide animation
        showDots={true}
        arrows={onMobile ? false : true}
        autoPlay={false}
        autoPlaySpeed={5000}
        centerMode={false}
        containerClass=""
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite={true}
        keyBoardControl={true}
        minimumTouchDrag={50}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={onMobile? true : false}
        responsive={{
            desktop: {
                breakpoint: {
                    max: 5000,
                    min: breakpoints.lg
                },
                items: 1
            },
            tablet: {
                breakpoint: {
                    max: breakpoints.lg,
                    min: breakpoints.md
                },
                items: 1
            },
            mobile: {
                breakpoint: {
                    max: breakpoints.sm,
                    min: 0
                },
                items: 1
            },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        slidesToSlide={1}
        swipeable
        >
                {images.map((image, index) => (
                    <img key={index}
                        draggable="false"
                        srcSet={`https://sastapletonantiques.blob.core.windows.net/antique-image-container/${image}?auto=format&fit=crop&w=800&q=60`}
                        src={`https://sastapletonantiques.blob.core.windows.net/antique-image-container/${image}?auto=format&fit=crop&w=800&q=60`}
                        alt={image}
                        loading="lazy"
                        style={{
                            borderRadius: '5px',
                            overflow: 'hidden'
                        }}
                    />
                ))}
        </Carousel>
    )
}

export default ImageCarousel;