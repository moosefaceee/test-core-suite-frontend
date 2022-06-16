import { Button, Icon, useColorMode } from '@chakra-ui/react'
import { FiMoon, FiSun } from 'react-icons/fi'

function ModeToggle() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Button onClick={toggleColorMode}>
      {colorMode === 'light' ? <Icon as={FiSun} /> : <Icon as={FiMoon} />}
    </Button>
  )
}

export default ModeToggle
