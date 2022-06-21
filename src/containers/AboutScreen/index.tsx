import { Image, Stack, Text } from '@chakra-ui/react'
import { ReactElement } from 'react'
import { Card, Carousel } from '../../components'
import images from '../../theme/images'

type Slide = {
  image: string
  title: string
  subTitle: string
}

let slides: Slide[] = [
  {
    image: images.walkthroughOne,
    title: 'Easy project creation',
    subTitle:
      "Add a few simple details to begin your project creation, it's simple, effective and easily editable."
  },
  {
    image: images.walkthroughTwo,
    title: 'Easy engineering',
    subTitle:
      "We've taken the hassle out of the PV plant design process by reducing the amount of time needed to engineer a plant."
  },
  {
    image: images.walkthroughThree,
    title: 'Easy reporting',
    subTitle:
      "Reporting has never been simpler, you'll have all your necessary reports available on hand, per project."
  }
]

let isUnderConstruction = false

function renderSlides({ slides }: { slides: Slide[] }) {
  return slides.map((slide) => (
    <Stack textAlign="center" spacing={4} marginBottom={6}>
      <Image src={slide.image} width="md" objectFit="cover" borderRadius={4} height={250} />
      <Text textStyle="h5">{slide.title}</Text>
      <Text textStyle="p">{slide.subTitle}</Text>
    </Stack>
  ))
}

function AboutScreen(): ReactElement {
  return (
    <Stack align="center" justify="center" flexDirection="column" flex={1}>
      {isUnderConstruction ? (
        <Text textStyle="h5">This is a page about us, it's still under construction 🚧</Text>
      ) : (
        <Card padding={4} paddingBottom={8}>
          <Carousel
            renderControls={false}
            width="sm"
            renderSlides={() => renderSlides({ slides })}
          />
        </Card>
      )}
    </Stack>
  )
}

export default AboutScreen
