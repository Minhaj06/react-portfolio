import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HiOutlineBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setShowMenu(false);
  }, [pathname]);

  const menu = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];

  return (
    <>
      <nav className="sticky top-0 z-[1030] bg-primary shadow-md py-5 text-white font-jakartaSans">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="logo">
              <Link className="uppercase font-bold text-3xl" to={`/`}>
                MMK
              </Link>
            </div>
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="hover:opacity-60 duration-100 sm:hidden"
            >
              <HiOutlineBars3BottomRight size={32} />
            </button>
            <div
              className={`nav-items fixed top-0 duration-200 ${
                showMenu ? "left-0" : "-left-full"
              } w-full h-full bg-primaryDark sm:bg-transparent flex justify-center sm:justify-end items-center sm:static`}
            >
              <button
                onClick={() => setShowMenu(!showMenu)}
                className="hover:opacity-60 duration-100 absolute top-0 right-0 mt-3 mr-3 sm:hidden"
              >
                <HiOutlineXMark size={32} />
              </button>
              <ul className="flex flex-col sm:flex-row flex-wrap gap-x-10 md:gap-x-14 text-xl font-semibold">
                {menu.map((menuItem, index) => (
                  <li className="text-center" key={index}>
                    <NavLink
                      to={menuItem?.link}
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending hover:text-primaryLight2 hover:transition-colors"
                          : isActive
                          ? "text-primaryLight2"
                          : "hover:text-primaryLight2 hover:transition-colors"
                      }
                    >
                      {menuItem?.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
