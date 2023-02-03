import styled from "styled-components";

export const CalendarNumber = styled.span<{
  bgColor: string;
  colorText: string;
}>`
  position: absolute;
  top: 7px;
  right: 10px;
  line-height: 1;
  z-index: 1;
  width: 20px;
  height: 20px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 2px;
  border-radius: 100%;
  margin-bottom: 70px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.colorText};
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
