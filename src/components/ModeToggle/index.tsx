import { Icon, IconButton, useColorMode } from '@chakra-ui/react'
import { FiMoon, FiSun } from 'react-icons/fi'

function ModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton onClick={toggleColorMode} aria-label="dark/light mode toggle">
      {colorMode === 'light' ? <Icon as={FiSun} /> : <Icon as={FiMoon} />}
    </IconButton>
  )
}

export default ModeToggle
