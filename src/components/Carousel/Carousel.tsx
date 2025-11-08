import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Box from '@mui/material/Box';

// docs: https://www.npmjs.com/package/react-multi-carousel

type ImageCarouselProps = {
    images: string[];
}

function ImageCarousel({images} : ImageCarouselProps)
{
    return (
        <Box sx={{
            borderRadius: '30px',
            overflow: 'hidden',
            boxShadow: 'rgba(0, 0, 0, 0.5) 0px 8px 24px;',
            maxHeight:'100%',
        }}>
            <Carousel
            additionalTransfrom={0}
            showDots
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={true}
            responsive={{
                desktop: {
                breakpoint: {
                    max: 3000,
                    min: 1024
                },
                items: 1
                },
                mobile: {
                breakpoint: {
                    max: 464,
                    min: 0
                },
                items: 1
                },
                tablet: {
                breakpoint: {
                    max: 1024,
                    min: 464
                },
                items: 1
                }
            }}
            rewind={true}
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
                    />
                ))}
            </Carousel>
        </Box>
    )
}

export default ImageCarousel;