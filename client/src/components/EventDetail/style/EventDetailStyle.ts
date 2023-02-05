import { Link } from "react-router-dom";
import styled from "styled-components";

export const EventDetailsContainer = styled.div`
  position: relative;
  margin: auto;
  width: 700px;
  height: 100%;
  object-fit: cover;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
`;

export const EventContent = styled.div`
  background-color: white;
  padding: 10px;
`;

export const ImageCalendar = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const NavLink = styled(Link)`
  background-color: #6772e5;
  position: absolute;
  text-align: center;
  right: 10px;
  padding: 10px;
  width: 40px;
  height: 40px;
  border-radius: 0.25em;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid #ddd;
  margin-right: 0.5em;
  color: #ddd;
  &:active {
    top: 21px;
  }
`;
