import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-56 h-screen bg-white border-r border-border-gray flex flex-col p-4">
      <div className="mb-8 px-2">
        <div className="flex items-center justify-between border border-border-gray rounded-lg px-3 py-2">
          <img src="/logo-factorial.svg" alt="Factorial web" className="h-7" />
          <i className="fa-solid fa-angle-down text-mid-gray"></i>
        </div>
      </div>
      <p className="text-xs font-medium text-mid-gray uppercase tracking-widest px-2 mb-2">
        Management
      </p>
      <nav className="flex flex-col gap-1">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              isActive
                ? "bg-red-50 text-brand-red"
                : "text-mid-gray hover:bg-light-gray"
            }`
          }
        >
          <i className="fa-solid fa-chart-line"></i> Dashboard
        </NavLink>
        <NavLink
          to="/add-metric"
          className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              isActive
                ? "bg-red-50 text-brand-red"
                : "text-mid-gray hover:bg-light-gray"
            }`
          }
        >
          <i className="fa-solid fa-plus"></i> Add metric
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
