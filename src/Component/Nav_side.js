/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Nav_side.css";
import { Link } from "react-router-dom";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import profile from '../Images/SSISM_logo.gif';
import { BsTwitter } from "react-icons/bs";
import { FaRegistered } from "react-icons/fa";


const Nav_side = () => {
  return (
    <div>
      <header class="app-header fixed-top">
        <div class="app-header-inner">
          <div class="container-fluid py-2">
            <div class="app-header-content">
              <div class="row justify-content-between align-items-center">
                <div class="col-auto">
                  <a
                    id="sidepanel-toggler"
                    class="sidepanel-toggler d-inline-block d-xl-none"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      role="img"
                    >
                      <title>Menu</title>
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="2"
                        d="M4 7h22M4 15h22M4 23h22"
                      ></path>
                    </svg>
                  </a>
                </div>

                <div class="app-utilities col-auto">
                  <div class="app-utility-item app-notifications-dropdown dropdown">
                    <Link class="Link" to="/sendRequest">
                      <button type="button" id="secSp" class="second-btn">Send Request</button>
                    </Link>
                    <a href="">
                      <FaRegistered size="25px" /> Registration
                    </a>
                    <button type="button" class="second-btn">
                      Login
                    </button>
                    <button type="button" class="second-btn">
                      Sign Up
                    </button>
                    <Link class="Link" to="/notification">
                      <a
                        class="dropdown-toggle no-toggle-arrow"
                        id="notifications-dropdown-toggle"
                        data-bs-toggle="dropdown"
                        href="#"
                        role="button"
                        aria-expanded="false"
                        title="Notifications"
                      >
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          class="bi bi-bell icon"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z" />
                          <path
                            fill-rule="evenodd"
                            d="M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"
                          />
                        </svg>
                        <span class="icon-badge">3</span>
                      </a>
                    </Link>

                    <div
                      class="dropdown-menu p-0"
                      aria-labelledby="notifications-dropdown-toggle"
                    >
                      <div class="dropdown-menu-header p-3">
                        <h5 class="dropdown-menu-title mb-0">Notifications</h5>
                      </div>
                      <div class="dropdown-menu-content">
                        <div class="item p-3">
                          <div class="row gx-2 justify-content-between align-items-center">
                            <div class="col-auto">
                              <img
                                class="profile-image"
                                src="assets/images/profiles/profile-1.png"
                                alt=""
                              />
                            </div>
                            <div class="col">
                              <div class="info">
                                <div class="desc">
                                  Amy shared a file with you. Lorem ipsum dolor
                                  sit amet, consectetur adipiscing elit.{" "}
                                </div>
                                <div class="meta"> 2 hrs ago</div>
                              </div>
                            </div>
                          </div>
                          <a class="link-mask" href="notifications.html"></a>
                        </div>
                        <div class="item p-3">
                          <div class="row gx-2 justify-content-between align-items-center">
                            <div class="col-auto">
                              <div class="app-icon-holder">
                                <svg
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 16 16"
                                  class="bi bi-receipt"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"
                                  />
                                  <path
                                    fill-rule="evenodd"
                                    d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div class="col">
                              <div class="info">
                                <div class="desc">
                                  You have a new invoice. Proin venenatis
                                  interdum est.
                                </div>
                                <div class="meta"> 1 day ago</div>
                              </div>
                            </div>
                          </div>
                          <a class="link-mask" href="notifications.html"></a>
                        </div>
                        <div class="item p-3">
                          <div class="row gx-2 justify-content-between align-items-center">
                            <div class="col-auto">
                              <div class="app-icon-holder icon-holder-mono">
                                <svg
                                  width="1em"
                                  height="1em"
                                  viewBox="0 0 16 16"
                                  class="bi bi-bar-chart-line"
                                  fill="currentColor"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"
                                  />
                                </svg>
                              </div>
                            </div>
                            <div class="col">
                              <div class="info">
                                <div class="desc">
                                  Your report is ready. Proin venenatis interdum
                                  est.
                                </div>
                                <div class="meta"> 3 days ago</div>
                              </div>
                            </div>
                          </div>
                          <a class="link-mask" href="notifications.html"></a>
                        </div>
                        <div class="item p-3">
                          <div class="row gx-2 justify-content-between align-items-center">
                            <div class="col-auto">
                              <img
                                class="profile-image"
                                src=""
                                alt=""
                              />
                            </div>
                            <div class="col">
                              <div class="info">
                                <div class="desc">
                                  James sent you a new message.
                                </div>
                                <div class="meta"> 7 days ago</div>
                              </div>
                            </div>
                          </div>
                          <a class="link-mask" href="notifications.html"></a>
                        </div>
                      </div>

                      <div class="dropdown-menu-footer p-2 text-center">
                        <a href="notifications.html">View all</a>
                      </div>
                    </div>
                  </div>

                  <div class="app-utility-item app-user-dropdown dropdown">
                    <a
                      class="dropdown-toggle"
                      id="user-dropdown-toggle"
                      data-bs-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-expanded="false"
                    >
                      <img
                        src={profile}
                        alt="user profile"
                      />
                    </a>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="user-dropdown-toggle"
                    >
                      <li>
                        <a class="dropdown-item" href="account.html">
                          Account
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="settings.html">
                          Settings
                        </a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <a class="dropdown-item" href="login.html">
                          Log Out
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="app-sidepanel" class="app-sidepanel">
          <div id="sidepanel-drop" class="sidepanel-drop"></div>
          <div class="sidepanel-inner d-flex flex-column">
            <a href="#" id="sidepanel-close" class="sidepanel-close d-xl-none">
              &times;
            </a>
            <div class="app-branding">
              <a class="app-logo" href="index.html">
                <img
                  class="logo-icon me-2"
                  src="assets/images/app-logo.svg"
                  alt="logo"
                />
                {/* <span className="logo-text">ITEG Management</span> */}
              </a>
            </div>

            <nav id="app-nav-main" class="app-nav app-nav-main flex-grow-1">
              <ul class="app-menu list-unstyled accordion" id="menu-accordion">
                <li class="nav-item">
                  <a class="nav-link active" href="index.html">
                    <span class="nav-icon">
                      <svg
                        width="1em"
                        height="1em"
                        viewBox="0 0 16 16"
                        class="bi bi-house-door"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                        />
                      </svg>
                    </span>
                    <span class="nav-link-text">Dashboard</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="docs.html">
                    <span class="nav-icon">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="graduation-cap"
                        class=" bi bi-folder svg-inline--fa fa-graduation-cap fa-w-20"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                      >
                        <path
                          fill="currentColor"
                          d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"
                        ></path>
                      </svg>
                    </span>
                    <span class="nav-link-text">Academic</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="orders.html">
                    <span class="nav-icon">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shield-alt" class="svg-inline--fa fa-shield-alt fa-w-16 bi bi-card-list" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"></path></svg>
                    </span>
                    <span class="nav-link-text">Management</span>
                  </a>
                </li>
                <li class="nav-item has-submenu">
                  <a
                    class="nav-link submenu-toggle"
                    href="#"
                    data-bs-toggle="collapse"
                    data-bs-target="#submenu-1"
                    aria-expanded="false"
                    aria-controls="submenu-1"
                  >
                    <span class="nav-icon">
                      <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="paypal" class="svg-inline--fa fa-paypal fa-w-12 bi bi-files" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4.7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9.7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z"></path></svg>
                    </span>
                    <span class="nav-link-text">Payments</span>

                  </a>
                </li>
                <li class="nav-item has-submenu">
                  <a
                    class="nav-link submenu-toggle"
                    href="#"
                    data-bs-toggle="collapse"
                    data-bs-target="#submenu-2"
                    aria-expanded="false"
                    aria-controls="submenu-2"
                  >
                    <span class="nav-icon">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12 bi bi-columns-gap" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
                    </span>
                    {/* <span class="nav-link-text">Placements</span> */}
                    <span class="nav-link-text"><Link to={'/main'}>Placements</Link></span>
                  </a>
                </li>
              </ul>
            </nav>
            <div class="app-sidepanel-footer">
              <nav class="app-nav app-nav-footer">
                <ul class="app-menu footer-menu list-unstyled">
                  <div class="d-flex justify-content-evenly pt-3 pb-3">
                    <div>
                      {" "}
                      <AiFillFacebook size="30px" />
                    </div>
                    <div>
                      {" "}
                      <AiFillLinkedin size="30px" />
                    </div>
                    <div>
                      <BsTwitter size="30px" />
                    </div>
                  </div>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Nav_side;
