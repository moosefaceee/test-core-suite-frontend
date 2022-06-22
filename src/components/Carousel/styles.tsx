import { Box, ColorMode } from '@chakra-ui/react'
import styled from '@emotion/styled'

type CarouselProps = {
  colorMode: ColorMode
}

export const CarouselWrap = styled(Box)<CarouselProps>`
  .react-slideshow-container + ul.indicators {
    margin-top: 0px;
    position: absolute;
    left: 0;
    right: 0;
  }
  .indicator {
    cursor: pointer;
    padding: 0 10px;
    text-align: center;
  }

  .indicator.active {
    color: ${({ colorMode }) => (colorMode === 'dark' ? 'white' : 'black')}#fff;
  }
`
