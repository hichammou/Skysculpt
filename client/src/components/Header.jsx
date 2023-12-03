import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flex bg-slate-50 bg-opacity-50 sticky top-0 z-50 backdrop-blur-xl justify-between mb-20 py-5 items-center">
      <p className="font-bold text-2xl blue_gradient">
        <Link to="/">Skysculpt</Link>
      </p>
      <ul className="flex gap-10">
        <li className="font-semibold text-slate-500 hover:text-slate-900">
          <NavLink to="/history">History</NavLink>
        </li>
        <li className="font-semibold text-slate-500 hover:text-slate-900">
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
