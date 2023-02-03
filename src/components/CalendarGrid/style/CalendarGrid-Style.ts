import styled from "styled-components";

export const CalendarDates = styled.div`
  background: #ddd;
  grid-column-gap: 1px;
  grid-row-gap: 1px;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  min-height: 30rem;
  height: 36rem;

  & > * {
    position: relative;
    background: #fff;
    overflow: hidden;
    z-index: 1;
  }

  & > *:focus {
    outline: 1px solid #6772e5;
  }

  & > *::before {
    content: "";
    display: block;
    padding-top: 100%;
  }

  & > .prev-date span {
    opacity: 0.5;
  }

  & > .next-date span {
    opacity: 0.5;
  }

  & > .today-date {
    background: #dff1de;
  }

  & > .calendar-active {
    background: #dddffb;
  }

  #calendar-active {
    text-align: right;
    opacity: 0.5;
  }
`;
