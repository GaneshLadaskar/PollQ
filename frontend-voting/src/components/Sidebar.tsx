import { Link } from "react-router-dom";
import {
  FaBars,
  FaHome,
  FaUser,
  FaPlus,
  FaPoll,
  FaList,
  FaSearch,
  FaSignOutAlt,
  FaSignInAlt,
} from "react-icons/fa";
import { useState } from "react";

export default function Sidebar({ show, onclose }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div className={`h-[43rem] w-20`}>
      <div
        className={`sticky h-[43rem] bg-gray-p ${
          isCollapsed ? "w-20" : "w-72"
        } p-4 rounded-xl transition-width duration-300`}
      >
        <div className={`flex flex-col`}>
          <div
            className={`flex ${
              isCollapsed ? "justify-center" : "justify-between"
            } items-center`}
          >
            <h1
              className={`text-white text-3xl font-bold text-center mt-2 ${
                isCollapsed ? "hidden" : "block"
              }`}
            >
              pollQ
            </h1>
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="text-white"
            >
              <FaBars />
            </button>
          </div>

          <button
            onClick={onclose}
            className="mt-4 px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600"
          >
            Cancel
          </button>

          <div className={`flex flex-col gap-4 mt-10`}>
            <Link
              to={"/home"}
              className="custom-sidebar-links flex items-center gap-2"
            >
              <FaHome />
              {"Home"}
            </Link>
            <Link
              to={"/profile"}
              className="custom-sidebar-links flex items-center gap-2"
            >
              <FaUser />
              {"Profile"}
            </Link>
            <Link
              to={"/createnewpoll"}
              className="custom-sidebar-links flex items-center gap-2"
            >
              <FaPlus />
              {"Create Poll"}
            </Link>
            <Link
              to={"/activepolls"}
              className="custom-sidebar-links flex items-center gap-2"
            >
              <FaPoll />
              {"Active Polls"}
            </Link>
            <Link
              to={"/mypolls"}
              className="custom-sidebar-links flex items-center gap-2"
            >
              <FaList />
              {"My Polls"}
            </Link>
            <Link
              to={"/search"}
              className="custom-sidebar-links flex items-center gap-2"
            >
              <FaSearch />
              {"Search Polls"}
            </Link>
            <Link
              to={"/login"}
              className="custom-nav-links flex gap-3 pl-4 items-center"
            >
              <FaSignInAlt />
              {"Login"}
            </Link>

            <Link
              to={"/logout"}
              className="custom-sidebar-links flex items-center gap-2"
            >
              <FaSignOutAlt />
              {"Logout"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
