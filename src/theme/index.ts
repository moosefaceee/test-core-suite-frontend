/**
 * https://chakra-ui.com/docs/styled-system/theming/theme
 *
 * Please read through the Default Theme documentation for a clear understanding before extending it,
 * Chakra theming is a powerful tool 🛠
 */

// 1. Import the extendTheme function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true
}

// 3. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac'
  }
}

const components = {}

const theme = extendTheme({
  colors,
  config,
  components
})

export default theme
