import { Cast } from "components/Cast/Cast";
import { Reviews } from "components/Reviews/Reviews";
import { Outlet } from "react-router-dom";
// import { NavLink } from "react-router-dom";

export const Addition = () => {
  return (
    <><h2>Additional information</h2>
      <ul>
        <li>
          <Cast/>
        </li>
        <li>
          <Reviews/>
        </li>
        {/* <li>
          <NavItem to="search">Search</NavItem>
        </li> */}
          </ul>
          <Outlet/>  </>
  );
};