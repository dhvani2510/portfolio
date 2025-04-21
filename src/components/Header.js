import { useState } from "react";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#project" },
    { label: "Profile", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light sticky-top">
      <div className="container d-flex justify-content-between align-items-center w-100">
        {/* Brand */}
        <a className="navbar-brand d-flex align-items-center" href="/">
          <FaUser className="mr-2" />
          Dhvani Sheth
        </a>

        {/* Hamburger Icon (Visible on mobile) */}
        <button
          className="d-sm-none border-0 bg-transparent"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Desktop Nav */}
        <div className="d-none d-sm-block ml-auto">
          <ul className="navbar-nav d-flex flex-row" role="navigation">
            {navItems.map((item) => (
              <li className="nav-item mx-2" key={item.label}>
                <a href={item.href} className="nav-link">
                  <span data-hover={item.label}>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Nav (conditionally rendered) */}
        {isMobileMenuOpen && (
          <div className="d-sm-none top-100 start-0 bg-white w-100 shadow-sm mt-2 px-3 py-2 z-index-10">
            <ul className="navbar-nav" role="navigation">
              {navItems.map((item) => (
                <li className="nav-item my-2" key={item.label}>
                  <a
                    href={item.href}
                    className="nav-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
