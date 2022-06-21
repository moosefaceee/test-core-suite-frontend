import { Flex, FlexProps, useColorModeValue } from '@chakra-ui/react'
import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'

type PageWrapProps = FlexProps & {
  title: string
}

function PageWrap({ children, title, ...rest }: PageWrapProps): JSX.Element {
  return (
    <>
      <Helmet title={title} />
      <Flex
        as="main"
        // TODO: colors from theme (AlphaWhite/AlphaBlack https://chakra-ui.com/docs/styled-system/theming/theme)
        boxShadow={`0 -1px 0 0 rgba(204, 204, 204, ${useColorModeValue('.4', '.2')})`}
        {...rest}
      >
        {children}
        <Outlet />
      </Flex>
    </>
  )
}

export default PageWrap

PageWrap.defaultProps = {
  flex: 1,
  flexDirection: 'column',
  maxW: 1440,
  marginX: 'auto',
  justifyContent: 'flex-start',
  minHeight: 'calc(100vh - 4rem)' // minus height of GuestNavbar or Navbar,
}
