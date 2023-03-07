import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Title = styled.h1`
  padding: 30px;
  font-size: 35px;
  font-weight: 700;
  background-color: #ed8032;
  color: #292c33;
`;

export const NavLinkButton = styled(NavLink)`
  display: block;
  padding: 10px;
  width: 100px;
  border-radius: 5px;
  box-shadow: 1px 1px 2px grey;
  border: none;
  font-size: 14px;
  z-index: 10;
  text-align: center;
  text-decoration: none;
  color: black;

   &.active {
    border: 3px solid #ed8032;
    color: #ed8032;
  }
  
  :hover,
  :focus-visible{
    background-color: #8f95a3;
    color: white;
  }
`;

export const Container = styled.div`
  padding-left: 20px;
  padding-bottom: 20px;
  display: flex;
  gap: 20px;
  width: 100%;
`;

export const Text = styled.div`
  padding-right: 30px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  padding-top: 10px;
  font-size: 18px;
`;

export const Addition = styled.h2`
  padding: 10px 15px;
  font-size: 20px;
  font-weight: 700;
  background-color: #bdbbb9;
  color: #292c33;
`;

export const AdditionUl = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 20px;
  flex-wrap: wrap;
`;
