import { NavLink } from 'react-router-dom';
import styled from "styled-components";

export const NavUl = styled.ul`
display: flex;
gap: 30px;
padding-left: 40px;
padding-top: 5px;
padding-bottom: 5px;
border-bottom: 1px solid tomato;
`;

export const NavItem = styled(NavLink)`
display: flex;
// align-items: center;
text-align: center;
gep: 50px;
padding: 10px;
border-radius: 4px;
text-decoration: none;
color: red;

&.active{
    background-color: yellow;
    color: black;
}

:hover:not(.active),
:focus-visible:not(.active){
    color: blue;
}
`;