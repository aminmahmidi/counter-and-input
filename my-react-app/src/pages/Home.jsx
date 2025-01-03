import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { NotePencil, Timer } from "@phosphor-icons/react";
const Home = () => {
  return (
    <>
      <div className="navbar">
        <h3>Amin Mahmidi</h3>
        <NavLink to="/input" activeClassName="active">
          <NotePencil size={35} /> input
        </NavLink>
        <NavLink to="/counter">
          <Timer size={35} /> counter
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};

export default Home;
