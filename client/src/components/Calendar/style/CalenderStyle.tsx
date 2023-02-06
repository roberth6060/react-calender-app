import styled from "styled-components";

export const CalendarContainer = styled.div`
    & > * {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
}
`



