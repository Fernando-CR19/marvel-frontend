import { Link } from "react-router-dom";

import { Bars3Icon } from "@heroicons/react/24/solid";
import { HeaderNav } from "./HeaderNav";

export const Header = ({ onOpenSidebar }) => {
  return (
    <header className="bg-red-800 h-16 flex items-center px-4 justify-between">
      <h1 className="text-white uppercase font-semibold">
        <Link to="/">Marvel</Link>
      </h1>
      <button onClick={onOpenSidebar} className="text-white lg:hidden">
        <Bars3Icon className="h-6 w-6" />
      </button>
      <HeaderNav />
    </header>
  );
};
