import { Flex, FlexProps, useColorModeValue } from '@chakra-ui/react'
import { ReactElement } from 'react'

export type CardProps = FlexProps

function Card({ children, ...rest }: CardProps): ReactElement {
  return (
    <Flex backgroundColor={useColorModeValue('gray.50', 'gray.800')} {...rest}>
      {children}
    </Flex>
  )
}

export default Card

Card.defaultProps = {
  width: 'auto',
  rounded: 'md',
  borderWidth: '1px',
  onClick: () => false,
  flexDirection: 'column'
}
