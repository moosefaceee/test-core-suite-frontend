import { Button, IconButton, useId } from '@chakra-ui/react'
import { mergeProps, useMachine, useSetup } from '@zag-js/react'
import * as toggle from '@zag-js/toggle'
import { ReactElement } from 'react'

type IconButtonToggleProps = {
  on: string | ReactElement
  off: string | ReactElement
  // 1. define prop type you want merged
  onClick?: (details: { pressed: boolean }) => void
}

/**
 * Find documentation here: https://zagjs.com/
 * Not sure why but it hasn't been added to the components list,
 * See implementation in Zag demo
 */
function IconButtonToggle({ on, off, onClick }: IconButtonToggleProps) {
  const [state, send] = useMachine(toggle.machine)
  const ref = useSetup<HTMLButtonElement>({ send, id: useId() })
  const api = toggle.connect(state, send)

  // 2. merge the props
  // See mergeProps composition: https://zagjs.com/overview/composition
  const buttonProps = mergeProps(api.buttonProps, { onClick, ['aria-label']: String })

  return (
    <IconButton as={Button} ref={ref} {...buttonProps}>
      {api.isPressed ? on : off}
    </IconButton>
  )
}

export default IconButtonToggle

IconButtonToggle.defaultProps = {
  on: 'On',
  off: 'Off'
}
