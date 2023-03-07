import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavUl = styled.ul`
  display: flex;
  gap: 30px;
  padding: 20px 40px;
  background-color: #292c33;
  font-size: 15px;
  font-weight: 700;
`;

export const NavItem = styled(NavLink)`
  display: inline-block;
  padding: 10px;
  text-decoration: none;
  text-align: center;
  width: 100px;
  color: #8f95a3;
  font-size: 15px;
  line-height: 20px;

  &.active {
    border: 3px solid #ed8032;
    color: #ed8032;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    border: 3px solid white;
    color: white;
  }
`;
