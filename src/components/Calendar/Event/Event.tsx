import * as React from 'react'
import { IEvent } from '../../../lib/event'
import {
  StyledColorTag,
  StyledEventContent,
  StyledEvent,
  StyledEventBody,
  StyledEventLink
} from './Event.styled'

const Event: React.FunctionComponent<IEvent> = (props) => {
  return (
    <StyledEvent>
      <StyledEventLink>
        <StyledEventContent>
          <StyledColorTag style={props.color ? { backgroundColor: props.color } : undefined} />
          <StyledEventBody>
            <span>{props.title}</span>
            <span>{props.body}</span>
          </StyledEventBody>
        </StyledEventContent>
      </StyledEventLink>
    </StyledEvent>
  )
}

export default Event
