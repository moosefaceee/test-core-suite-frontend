import { Flex, FlexProps } from '@chakra-ui/react'
import { ReactElement } from 'react'

type CardFooterProps = FlexProps

function CardFooter({ children, ...rest }: CardFooterProps): ReactElement {
  return (
    <Flex borderTopWidth="1px" {...rest}>
      {children}
    </Flex>
  )
}

export default CardFooter

CardFooter.defaultProps = {
  padding: 4,
  backgroundColor: 'white',
  roundedBottomLeft: 4,
  roundedBottomRight: 4,
  flexDirection: 'column'
}
