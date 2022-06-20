import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const CarouselWrap = styled(Box)`
  .slick-active {
    display: flex;
    justify-content: center;
  }

  .slick-slide:not(.slick-active) {
    display: flex;
    justify-content: center;
  }
`
