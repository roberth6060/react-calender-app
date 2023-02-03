import styled from "styled-components";

export const CalendarNumber = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  line-height: 1;
  z-index: 1;
`;

export const CalendarEvent = styled.span`
  position: absolute;
  top: 35px;
  left: 0;
  right: 0;
  font-size: 0.875rem;
  white-space: nowrap;
  text-align: left;
  background-color: #6772e5;
  margin: 1px 2px;
  text-align: center;
  color: #fff;
  padding: 2px 4px;
  border-radius: 0.25rem;
  cursor: pointer;
`;
