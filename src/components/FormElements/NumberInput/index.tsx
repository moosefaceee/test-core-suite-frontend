import { NumberInputField, useId } from '@chakra-ui/react'
import * as numberInput from '@zag-js/number-input'
import { useMachine, useSetup } from '@zag-js/react'

type NumberInputProps = {
  name: string
  value: string | undefined
}

/**
 * Find documentation here: https://zagjs.com/components/react/number-input
 */
function NumberInput({ name, value }: NumberInputProps) {
  const [state, send] = useMachine(numberInput.machine({ name, value }))
  const ref = useSetup({ send, id: useId() })
  const api = numberInput.connect(state, send)

  return (
    <div ref={ref} {...api.rootProps}>
      <label {...api.labelProps}>Enter number:</label>
      <div>
        <button {...api.decrementButtonProps}>DEC</button>
        <NumberInputField {...api.inputProps} />
        <button {...api.incrementButtonProps}>INC</button>
      </div>
    </div>
  )
}

export default NumberInput

NumberInput.defaultProps = {}
