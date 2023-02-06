import styled from "styled-components";
import { bgColor, bgOutLineColor, eventColor } from "../../../style/Variables";

export const CalendarDates = styled.div`
  background: ${bgOutLineColor};
  grid-column-gap: 1px;
  grid-row-gap: 1px;
  border-left: 1px solid ${bgOutLineColor};
  border-right: 1px solid ${bgOutLineColor};
  border-bottom: 1px solid ${bgOutLineColor};
  min-height: 30rem;
  height: 36rem;

  & > * {
    position: relative;
    background: #fff;
    overflow: hidden;
    z-index: 1;
  }

  & > *:focus {
    outline: 1px solid ${eventColor};
  }

  & > *::before {
    content: "";
    display: block;
    padding-top: 100%;
  }

  & > .previous-date span {
    opacity: 0.5;
  }

  & > .next-date span {
    opacity: 0.5;
  }

  & > .current-date {
    background: ${bgColor};
  }

  & > .calendar-active {
    background: #dddffb;
  }

  #calendar-active {
    text-align: right;
    opacity: 0.5;
  }
`;
