import { chakra, Flex, Link, Text } from '@chakra-ui/react'
import { ReactElement } from 'react'
import CheckBox from '../FormElements/Checkbox'

function TermsConditionsInput(): ReactElement {
  return (
    <CheckBox
      name="termsAndConditions"
      id="termsAndConditions"
      renderLabel={() => (
        <Flex justifyContent="space-between" width="100%">
          <Text>
            <chakra.span>I accept the</chakra.span>
            <Link marginLeft={1} onClick={() => alert('Ts & Cs pdf needed')}>
              Terms &amp; Conditions
            </Link>
          </Text>
        </Flex>
      )}
    />
  )
}

export default TermsConditionsInput

TermsConditionsInput.defaultProps = {
  flexDirection: 'column',
  justifyContent: 'flex-start',
  width: '100%'
}
