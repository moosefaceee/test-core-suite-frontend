import { Button, useId } from '@chakra-ui/react'
import { mergeProps, useMachine, useSetup } from '@zag-js/react'
import * as toggle from '@zag-js/toggle'
import { ReactElement } from 'react'

type ButtonToggleProps = {
  on: string | ReactElement
  off: string | ReactElement
  onClick?: (details: { pressed: boolean }) => void
}

/**
 * Find documentation here: https://zagjs.com/
 * Not sure why but it hasn't been added to the components list,
 * See implementation in Zag demo
 */
function ButtonToggle({ on, off, onClick }: ButtonToggleProps) {
  const [state, send] = useMachine(toggle.machine)
  const ref = useSetup<HTMLButtonElement>({ send, id: useId() })
  const api = toggle.connect(state, send)
  const buttonProps = mergeProps(api.buttonProps, { onClick })

  return (
    <Button ref={ref} {...buttonProps}>
      {api.isPressed ? on : off}
    </Button>
  )
}

export default ButtonToggle

ButtonToggle.defaultProps = {
  on: 'On',
  off: 'Off'
}
