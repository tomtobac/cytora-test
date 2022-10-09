import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import cs from "classnames";
import { PowerGlitch } from "powerglitch";
import { Route } from "@domain/Route";
import logo from "./star_wars_logo.png";
import "./Header.css";

const PAGE_LINKS = [Route.People, Route.Planets, Route.Vehicles, "/404"];

export const Header = () => {
  useEffect(() => {
    // 🥳
    PowerGlitch.glitch(".glitch", { playMode: "hover" });
  }, []);
  return (
    <header className="Header ">
      <h1 className="Header__logo glitch">
        <Link to="/">
          <img src={logo} width="128" />
        </Link>
      </h1>
      <nav className="Header__menu">
        <ul>
          {PAGE_LINKS.map((page) => (
            <li key={page} className="Header__menu-item">
              <NavLink
                to={page}
                className={(props) =>
                  cs({ "Header__menu-item--is-active": props.isActive })
                }
              >
                {page}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
