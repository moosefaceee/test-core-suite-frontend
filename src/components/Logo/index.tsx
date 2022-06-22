import { Center, Image, ImageProps, useColorModeValue } from '@chakra-ui/react'
import { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthProvider'
import images from '../../theme/images'

function Logo({ ...rest }: ImageProps): ReactElement {
  let { isAuthenticated } = useAuth()
  let navigate = useNavigate()

  return (
    <Center
      onClick={() => navigate(isAuthenticated ? '/auth/dashboard' : '/')}
      cursor="pointer"
      boxSize={50}
      rounded="50%"
      backgroundColor={useColorModeValue('black', 'white')}
      padding={2}
    >
      <Image loading="eager" {...rest} src={useColorModeValue(images.sssWhite, images.sssBlack)} />
    </Center>
  )
}

export default Logo

Logo.defaultProps = {
  width: 175,
  height: 'auto'
}
