import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Title = styled.form`
  display: flex;
  gap: 20px;
  padding: 30px;
  font-size: 35px;
  font-weight: 700;
  background-color: #ed8032;
  color: #292c33;
`;

export const FilmList = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 20px;
  flex-wrap: wrap;
`;

export const FilmItem = styled.li`
  display: block;
  width: 200px;
  height: 250px;
  box-shadow: 3px 2px 2px grey;
  overflow: hidden;
  position: relative;
`;

export const FilmItemLink = styled(NavLink)`
  display: block;
`;

export const FilmName = styled.div`
  background: rgba(161, 21, 207, 0.5);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(245, 140, 54, 0.9);
  color: white;
  font-size: 14px;
  line-height: 1.6;
  letter-spacing: 0.03em;
  padding: 4px;
  text-align: center;
`;

export const Alternative = styled.div`
   font-size: 20px;
  line-height: 1.6;
  letter-spacing: 0.03em;
  padding: 4px;
 
`;
