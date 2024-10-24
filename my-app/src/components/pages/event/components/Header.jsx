"use client";
import React, { useEffect } from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "../components/lib/utils.js";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <>
      {/* <div>
        <header className="p-3 mb-3 border-bottom bg-zinc-400">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a
                href="/"
                clasNamesName="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
              >
                <svg
                  className="bi me-2"
                  width="40"
                  height="32"
                  role="img"
                  aria-label="Bootstrap"
                >
                  <use xlink:href="#bootstrap"></use>
                </svg>
              </a>

              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li>
                  <a href="#" className="nav-link px-2 link-secondary">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link px-2 link-body-emphasis">
                    Inventory
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link px-2 link-body-emphasis">
                    Customers
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link px-2 link-body-emphasis">
                    Products
                  </a>
                </li>
              </ul>

              <form
                className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
                role="search"
              >
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search..."
                  aria-label="Search"
                />
              </form>

              <div className="dropdown text-end">
                <a
                  href="#"
                  className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://github.com/mdo.png"
                    alt="mdo"
                    width="32"
                    height="32"
                    class="rounded-circle"
                  />
                </a>
                <ul className="dropdown-menu text-small">
                  <li>
                    <a className="dropdown-item" href="#">
                      New project...
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      </div> */}
      <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg cursor-pointer">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <h1
          data-aos="zoom-in"
          data-aos-delay="200"
          className={cn(" text-7xl  text-white relative z-20")}
        >
          Book Your events
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-delay="300"
          className="text-center mt-4  text-neutral-300 relative z-20 text-3xl"
        >
          Book a seat and join us in our exciting events
        </p>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-delay="400"
        className="text-red-600 text-4xl font-serif font-semibold mt-3 mb-4"
      >
        Recomemded Events
      </div>
    </>
  );
}
