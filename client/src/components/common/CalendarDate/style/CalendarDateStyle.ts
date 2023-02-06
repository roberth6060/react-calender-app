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
