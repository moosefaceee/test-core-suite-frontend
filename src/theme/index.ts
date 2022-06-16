/**
 * https://chakra-ui.com/docs/styled-system/theming/theme
 *
 * Please read through the Default Theme documentation for a clear understanding before extending it,
 * Chakra theming is a powerful tool 🛠
 */

// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac'
  }
}

const theme = extendTheme({ colors })

export default theme
