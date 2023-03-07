import React from 'react';
import { NavItem, NavUl } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <NavUl>
        <li>
          <NavItem to="/">Home</NavItem>
        </li>
        <li>
          <NavItem to="movies">Movies</NavItem>
        </li>
      </NavUl>
    </nav>
  );
};
