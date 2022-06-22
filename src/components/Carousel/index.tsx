import { Box, BoxProps, Button, Flex, Icon, useColorMode } from '@chakra-ui/react'
import { ReactElement, useRef } from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { CarouselWrap } from './styles'

type CarouselProps = BoxProps & {
  renderSlides: () => ReactElement[]
}

function Carousel({ renderSlides, ...rest }: CarouselProps): ReactElement {
  const { colorMode } = useColorMode()
  /**
   * As we have used custom buttons, we need a reference variable to
   * change the state
   */
  const ref = useRef<Slide | null>(null)

  const slider = ref.current

  return (
    <CarouselWrap colorMode={colorMode}>
      <Box width="sm" className="slide-container" {...rest}>
        <Slide
          ref={ref}
          transitionDuration={250}
          arrows={false}
          indicators={() => (
            <Box className="indicator" marginTop={2}>
              •
            </Box>
          )}
          canSwipe={false}
        >
          {renderSlides()}
        </Slide>
        <Flex justifyContent="space-between" width="100%" alignItems="center">
          <Button
            width={100}
            aria-label="previous-arrow"
            variant="ghost"
            onClick={() => slider?.goBack()}
            leftIcon={<Icon as={FiArrowLeft} />}
          >
            Back
          </Button>
          <Button
            width={100}
            aria-label="next-arrow"
            variant="ghost"
            onClick={() => slider?.goNext()}
            rightIcon={<Icon as={FiArrowRight} />}
          >
            Next
          </Button>
        </Flex>
      </Box>
    </CarouselWrap>
  )
}

export default Carousel

Carousel.defaultProps = {
  width: 'sm'
}
