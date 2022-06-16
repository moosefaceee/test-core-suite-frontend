import { Box, Image, ImageProps } from '@chakra-ui/react'
import { ReactElement } from 'react'
import images from '../../theme/images'

function Logo({ ...rest }: ImageProps): ReactElement {
  return (
    <Box>
      <Image {...rest} src={images.sovtech} />
    </Box>
  )
}

export default Logo

Logo.defaultProps = {
  width: 150,
  height: '100%'
}
