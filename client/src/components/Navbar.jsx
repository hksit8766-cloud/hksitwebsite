import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo/logo1.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `transition whitespace-nowrap ${
      isActive
        ? "text-blue-600 font-semibold"
        : "text-slate-700 hover:text-blue-600"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-20 flex items-center justify-between">

        {/* ================= LOGO ================= */}
        <Link
          to="/"
          className="flex items-center flex-shrink-0"
          onClick={() => setOpen(false)}
        >
          <img
            src={logo}
            alt="HKS-IT Technology Solutions"
            className="h-14 md:h-16 w-auto object-contain"
          />
        </Link>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">

          <NavLink to="/" className={navClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={navClass}>
            About
          </NavLink>

          <NavLink to="/courses" className={navClass}>
            Courses
          </NavLink>

          <NavLink to="/trainers" className={navClass}>
            Trainers
          </NavLink>

          <NavLink to="/career-support" className={navClass}>
            Career Support
          </NavLink>

          {/* ================= PLACEMENTS ================= */}
          <NavLink to="/placements" className={navClass}>
            Placements
          </NavLink>

          <NavLink to="/contact" className={navClass}>
            Contact
          </NavLink>

          <Link
            to="/book-demo"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 xl:px-6 py-3 rounded-lg font-semibold transition whitespace-nowrap"
          >
            Book Free Demo
          </Link>

        </nav>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          type="button"
          className="lg:hidden text-2xl text-slate-800 w-10 h-10 flex items-center justify-center"
          onClick={() => setOpen((previous) => !previous)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>

      </div>

      {/* ================= MOBILE NAVIGATION ================= */}
      {open && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-5 py-5 shadow-lg">

          <nav className="flex flex-col gap-1">

            <MobileNavLink
              to="/"
              onClick={() => setOpen(false)}
            >
              Home
            </MobileNavLink>

            <MobileNavLink
              to="/about"
              onClick={() => setOpen(false)}
            >
              About
            </MobileNavLink>

            <MobileNavLink
              to="/courses"
              onClick={() => setOpen(false)}
            >
              Courses
            </MobileNavLink>

            <MobileNavLink
              to="/trainers"
              onClick={() => setOpen(false)}
            >
              Trainers
            </MobileNavLink>

            <MobileNavLink
              to="/career-support"
              onClick={() => setOpen(false)}
            >
              Career Support
            </MobileNavLink>

            {/* ================= PLACEMENTS ================= */}
            <MobileNavLink
              to="/placements"
              onClick={() => setOpen(false)}
            >
              Placements
            </MobileNavLink>

            <MobileNavLink
              to="/contact"
              onClick={() => setOpen(false)}
            >
              Contact
            </MobileNavLink>

            <Link
              to="/book-demo"
              onClick={() => setOpen(false)}
              className="bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-semibold mt-3 transition"
            >
              Book Free Demo
            </Link>

          </nav>

        </div>
      )}
    </header>
  );
};


/* ================= MOBILE NAV LINK ================= */

const MobileNavLink = ({ to, onClick, children }) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `px-3 py-3 rounded-lg transition ${
          isActive
            ? "bg-blue-50 text-blue-600 font-semibold"
            : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
        }`
      }
    >
      {children}
    </NavLink>
  );
};

export default Navbar;