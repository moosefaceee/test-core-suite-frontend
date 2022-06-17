import { Box, Flex, Icon, Text, theme, useColorModeValue } from '@chakra-ui/react'
import { IconType } from 'react-icons'
import { FiBell, FiHelpCircle, FiHome, FiSettings, FiStar, FiUser } from 'react-icons/fi'
import { NavLink, Outlet } from 'react-router-dom'
import { OPEN_WIDTH } from '../../constants'
import { useAppContext } from '../../context/AppProvider'
import Logo from '../Logo'
import Navbar from '../Navbar'

interface LinkItemProps {
  name: string
  icon: IconType
  href: string
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome, href: '/home' },
  { name: 'Favourites', icon: FiStar, href: '/favorites' },
  { name: 'Settings', icon: FiSettings, href: '/settings' },
  { name: 'My Profile', icon: FiUser, href: '/profile' },
  { name: 'Notifications', icon: FiBell, href: '/notifications' },
  { name: 'Support', icon: FiHelpCircle, href: '/support' }
]

function Sidebar() {
  let { drawerOpen } = useAppContext()

  // TODO: Open/close
  // let { drawerOpen, toggleDrawer } = useAppContext()

  return (
    <>
      <Flex flexDir="column" minHeight="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
        <Box
          backgroundColor={useColorModeValue('white', 'gray.900')}
          borderRight="1px"
          borderRightColor={useColorModeValue('gray.200', 'gray.700')}
          // TODO: Open/close
          // width={drawerOpen ? OPEN_WIDTH : CLOSED_WIDTH}
          width={OPEN_WIDTH}
          position="fixed"
          height="full"
        >
          <Flex height={16} alignItems="center" marginX={8} justifyContent="space-between">
            <Logo />
          </Flex>
          {LinkItems.map(({ href, icon, name, ...rest }) => (
            <NavLink
              to={href}
              style={({ isActive }) => {
                return {
                  display: 'block',
                  color: isActive ? theme.colors.purple[400] : ''
                }
              }}
            >
              <Flex
                align="center"
                padding={4}
                marginX={4}
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                  bg: 'cyan.400',
                  color: 'white'
                }}
                {...rest}
              >
                {icon && (
                  <Icon
                    marginRight={4}
                    fontSize="16px"
                    _groupHover={{
                      color: 'white'
                    }}
                    as={icon}
                  />
                )}
                {drawerOpen && <Text>{name}</Text>}
              </Flex>
            </NavLink>
          ))}
        </Box>
      </Flex>
      <Box width="100%">
        <Navbar />
      </Box>
      <Outlet />
    </>
  )
}

export default Sidebar
