import styled from 'styled-components';

export const Title = styled.h4`
  font-weight: 700;
`;

export const FilmList = styled.ul`
  display: flex;
  gap: 20px;
  padding: 20px;
  flex-wrap: wrap;
`;

export const FilmItem = styled.li`
  display: flex;
  gap: 20px;
  width: 400px;
  height: 150px;
  box-shadow: 3px 2px 2px grey;
  overflow: hidden;
  position: relative;
`;

export const CardTitle = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  font-size: 18px;
  padding: 20px;
`;
