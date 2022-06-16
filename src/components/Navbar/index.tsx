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
import ModeToggle from '../ModeToggle'

function Navbar() {
  return (
    <Box
      paddingLeft={60}
      backgroundColor={useColorModeValue('gray.100', 'gray.900')}
      paddingX={4}
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth={1}
      as="header"
    >
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
                    <Text>{faker.name.findName()}</Text>
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
  )
}

export default Navbar
