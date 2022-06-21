import { Flex, FlexProps } from '@chakra-ui/react'
import { ReactElement } from 'react'

type CardHeaderProps = FlexProps

function CardHeader({ children, ...rest }: CardHeaderProps): ReactElement {
  return (
    <Flex borderBottomWidth="1px" {...rest}>
      {children}
    </Flex>
  )
}

export default CardHeader

CardHeader.defaultProps = {
  padding: 4,
  roundedTopLeft: 2,
  roundedTopRight: 2,
  flexDirection: 'row'
}
