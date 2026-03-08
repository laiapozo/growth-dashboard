import { NavLink } from "react-router-dom";

const NAV_LINKS = [
  {
    to: "/",
    icon: "fa-chart-line",
    label: "Dashboard",
  },
  {
    to: "/add-metric",
    icon: "fa-plus",
    label: "Add metric",
  },
];

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
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-red-50 text-brand-red"
                  : "text-mid-gray hover:bg-light-gray"
              }`
            }
          >
            <i className={`fa-solid ${link.icon}`}></i> {link.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
