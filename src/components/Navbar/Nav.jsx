import React from "react";
import AuctionGallery from "../../assets/AuctionGallery.svg";
import Ellipse_19 from "../../assets/Ellipse_19.svg";

const Nav = () => {
  return (
    <nav className="bg-base-100 shadow-sm">
      <div className="navbar w-11/12 mx-auto font-poppins">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="text-lg">Home</a>
              </li>
              <li>
                <a className="text-lg">Auctions</a>
              </li>
              <li>
                <a className="text-lg">Categories</a>
              </li>
              <li>
                <a className="text-lg">How to works</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img src={AuctionGallery} alt="Auction" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-lg">Home</a>
            </li>
            <li>
              <a className="text-lg">Auctions</a>
            </li>
            <li>
              <a className="text-lg">Categories</a>
            </li>
            <li>
              <a className="text-lg">How to works</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-5 lg:flex hidden">
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>

              {/* Notification dot */}
              <span className="badge badge-xs badge-primary indicator-item">
                9
              </span>
            </div>
          </button>
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={Ellipse_19} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
