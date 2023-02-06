import styled from "styled-components";

export const CalendarEvent = styled.div<{
  bgColor: string | undefined;
}>`
  position: absolute;
  top: 35px;
  left: 0;
  right: 0;
  font-size: 0.875rem;
  white-space: nowrap;
  text-align: left;
  background-color: ${(props) => props.bgColor};
  margin: 1px 2px;
  text-align: center;
  color: #fff;
  padding: 2px 4px;
  border-radius: 0.25rem;
  cursor: pointer;
`;

export const EventConent = styled.div`
  color: white;
  font-size: 1em;
`;
