import { FormControl, Input as ChakraInput, InputProps, Text, useId } from '@chakra-ui/react'
import * as editable from '@zag-js/editable'
import { mergeProps, useMachine, useSetup } from '@zag-js/react'

type EditableProps = InputProps & {
  name: string
  value: string | undefined
  startWithEditView?: boolean | undefined
}

/**
 * Find documentation here: https://zagjs.com/components/react/editable
 */
function Editable({ name, value, startWithEditView, ...rest }: EditableProps) {
  const [state, send] = useMachine(editable.machine({ startWithEditView }))
  const ref = useSetup({ send, id: useId() })
  const api = editable.connect(state, send)

  // merge Chakra InputProps with machine props safely
  // See mergeProps composition: https://zagjs.com/overview/composition
  const inputProps = mergeProps(api.inputProps, rest)

  return (
    <FormControl ref={ref} {...api.rootProps}>
      <div {...api.areaProps}>
        <ChakraInput {...inputProps} />
        <Text {...api.previewProps} />
      </div>
    </FormControl>
  )
}

export default Editable

Editable.defaultProps = {
  startWithEditView: true
}
