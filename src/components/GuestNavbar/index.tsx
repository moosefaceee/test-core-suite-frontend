import { Box, Flex, Stack, useColorModeValue } from '@chakra-ui/react'
import { NavLink, Outlet } from 'react-router-dom'
import ModeToggle from '../ModeToggle'

function GuestNavbar() {
  return (
    <>
      <Box backgroundColor={useColorModeValue('gray.50', 'gray.800')} paddingX={4} as="header">
        <Flex height={16} alignItems="center" justifyContent="flex-end" as="nav">
          <Stack direction="row" spacing={6} alignItems="center">
            <NavLink to={'/home'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <ModeToggle />
          </Stack>
        </Flex>
      </Box>
      <Outlet />
    </>
  )
}

export default GuestNavbar
