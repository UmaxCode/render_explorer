import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex justify-between text-white px-[20%] py-3 bg-gray-400">
        <span>This is a simple React app with a header component.</span>
        <span>call</span>
      </div>
      <div className="flex">
        <a href="">Logo</a>
        <span className="flex gap-3 ml-7">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </span>
      </div>
      <div>{<Outlet />}</div>
    </>
  );
};

export default Header;
