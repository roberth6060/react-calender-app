import styled from "styled-components";
import * as palette from './Variables';

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  height: 100%;
`

export const CalendarTitle = styled.h1`
  color: ${palette.eventColor};
  font-size: 3em;
`
