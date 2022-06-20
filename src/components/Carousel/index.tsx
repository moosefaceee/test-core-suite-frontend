import { Box, BoxProps, IconButton, useBreakpointValue } from '@chakra-ui/react'
import React, { ReactElement } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import Slider from 'react-slick'

type CarouselProps = BoxProps & {
  slidesToShow?: number
  slidesToScroll?: number
  renderSlides: () => ReactElement | ReactElement[]
  renderControls?: boolean
}

function Carousel({
  slidesToShow,
  slidesToScroll,
  renderSlides,
  renderControls,
  ...rest
}: CarouselProps): ReactElement {
  // only fade if more than one slide
  const shouldFade = slidesToScroll && slidesToScroll === 1

  // Settings for the slider
  const settings = {
    dots: true,
    arrows: false,
    fade: !!shouldFade,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow,
    slidesToScroll,
    vertical: false,
    centerPadding: '0px'
  }
  /**
   * As we have used custom buttons, we need a reference variable to
   * change the state
   */
  const [slider, setSlider] = React.useState<Slider | null>(null)

  /**
   * These are the breakpoints which changes the position of the
   * buttons as the screen size changes
   */
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '40px' })

  return (
    <Box {...rest}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {renderControls && slidesToShow && slidesToShow > 1 && (
        <>
          <IconButton
            aria-label="left-arrow"
            variant="ghost"
            position="absolute"
            left={side}
            top={top}
            transform="translate(0%, -50%)"
            zIndex={2}
            onClick={() => slider?.slickPrev()}
          >
            <FiChevronLeft size="40px" />
          </IconButton>
          <IconButton
            aria-label="right-arrow"
            variant="ghost"
            position="absolute"
            right={side}
            top={top}
            transform="translate(0%, -50%)"
            zIndex={2}
            onClick={() => slider?.slickNext()}
          >
            <FiChevronRight size="40px" />
          </IconButton>
        </>
      )}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {renderSlides()}
      </Slider>
    </Box>
  )
}

export default Carousel

Carousel.defaultProps = {
  slidesToShow: 1,
  slidesToScroll: 1,
  position: 'relative',
  height: '600px',
  width: 'full',
  overflow: 'hidden',
  renderControls: true
}
