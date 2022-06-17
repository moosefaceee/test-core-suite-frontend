import {
  Avatar,
  Box,
  Center,
  Flex,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spacer,
  Stack,
  Text,
  useColorModeValue,
  VStack
} from '@chakra-ui/react'
import { faker } from '@faker-js/faker'
import { FiUser } from 'react-icons/fi'
import { Outlet } from 'react-router-dom'
import { useAuth } from '../../context/AuthProvider'
import ModeToggle from '../ModeToggle'

function Navbar() {
  let { user } = useAuth()

  return (
    <>
      <Box backgroundColor={useColorModeValue('gray.50', 'gray.800')} paddingX={4} as="header">
        <Flex height={16} alignItems="center" justifyContent="flex-end" as="nav">
          <Flex alignItems="center">
            <Stack direction="row" spacing={6}>
              <ModeToggle />
              <Menu>
                <MenuButton as={IconButton} cursor="pointer">
                  <Icon as={FiUser} />
                </MenuButton>
                <MenuList alignItems="center">
                  <VStack>
                    <Spacer />
                    <Spacer />
                    <Center>
                      <Avatar size="xl" src={faker.image.cats()} />
                    </Center>
                    <Center>
                      <Text>{user}</Text>
                    </Center>
                    <Spacer />
                  </VStack>
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      <Outlet />
    </>
  )
}

export default Navbar
