import { Icon, useColorMode } from '@chakra-ui/react'
import { FiMoon, FiSun } from 'react-icons/fi'
import { IconButtonToggle } from '../FormElements'

function ModeToggle() {
  const { toggleColorMode } = useColorMode()

  return (
    <IconButtonToggle
      onClick={toggleColorMode}
      aria-label="dark/light mode toggle"
      on={<Icon as={FiSun} />}
      off={<Icon as={FiMoon} />}
    />
  )
}

export default ModeToggle
