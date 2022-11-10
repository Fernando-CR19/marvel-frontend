import { XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export const Sidebar = ({ isOpen = false, onCloseSidebar }) => {
  return (
    <aside
      className={`bg-gray-800 fixed right-0 transition duration-200 ease-in-out w-72 top-0 z-20 bottom-0 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end p-4">
        <button className="text-white" onClick={onCloseSidebar}>
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="px-4">
        <ul>
          <li className="text-white mb-2">
            <Link to='/'>
             Meus favoritos
            </Link>
          </li>
          <li className="text-white mb-2">
              <Link to='/signin'>
                Sign In
              </Link>
          </li>
          <li className="text-white">
              <Link to='/signup'>
                Sign Up
              </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};
