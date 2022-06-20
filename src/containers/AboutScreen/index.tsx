import { Image, Stack, Text } from '@chakra-ui/react'
import { ReactElement } from 'react'
import { Carousel } from '../../components'
import images from '../../theme/images'

const slidesArr = [images.walkthroughOne, images.walkthroughTwo, images.walkthroughThree]

function renderSlides(slides: string[]) {
  return slides.map((slide) => (
    <Stack>
      <Image src={slide} boxSize={100} height="auto" objectFit="cover" borderRadius={4} />
      <Text textStyle="h5"></Text>
    </Stack>
  ))
}

function AboutScreen(): ReactElement {
  return (
    <Stack flexDirection="column" padding={4}>
      <Text textStyle="h5">This is a page about us, it's still under construction 🚧</Text>
      <Carousel renderSlides={() => renderSlides(slidesArr)} />
    </Stack>
  )
}

export default AboutScreen
