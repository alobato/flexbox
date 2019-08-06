import styled from 'styled-components'
import { style, justifyContent, alignItems, flexDirection, flexWrap } from 'styled-system'

import Box from './Box'

const jc = style({prop: 'jc', cssProperty: 'justifyContent'})
const ai = style({prop: 'ai', cssProperty: 'alignItems'})
const fd = style({prop: 'fd', cssProperty: 'flexDirection'})
const fw = style({prop: 'fw', cssProperty: 'flexWrap'})
const display = style({prop: 'display', alias: 'd'})

export const Flex = styled(Box)(
  {display: 'flex'},
  display,
  justifyContent, alignItems, flexDirection, flexWrap,
  jc, ai, fd, fw,
  props => props.css
)

Flex.displayName = 'Flex'

Flex.propTypes = {
  ...justifyContent.propTypes,
  ...alignItems.propTypes,
  ...flexDirection.propTypes,
  ...flexWrap.propTypes,
}

export default Flex
