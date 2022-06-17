import { Flex, Stack, useColorModeValue } from '@chakra-ui/react'
import { NavLink, Outlet } from 'react-router-dom'
import Logo from '../Logo'
import ModeToggle from '../ModeToggle'

function GuestNavbar() {
  return (
    <>
      <Flex
        alignItems="center"
        as="header"
        backgroundColor={useColorModeValue('gray.50', 'gray.800')}
        justifyContent="space-between"
        paddingX={4}
      >
        <Logo />
        <Flex height={16} alignItems="center" justifyContent="flex-end" as="nav">
          <Stack direction="row" spacing={6} alignItems="center">
            <NavLink to={'/home'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <ModeToggle />
          </Stack>
        </Flex>
      </Flex>
      <Outlet />
    </>
  )
}

export default GuestNavbar
