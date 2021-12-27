import React from "react";
import { LOG_IN } from "../../constants";
import { useContext, useState } from "react";
import { GlobalContext } from "../../context/Provider";
import { signout } from "../../context/actions/auth/auth.action";

function TopHeaderBar() {
  const {
    authDispatch,
    authState: { isLoggedIn },
  } = useContext(GlobalContext);

  const [isAuthenticated, setIsAuthenticated] = React.useState(isLoggedIn);
  const [authLoaded, setAuthLoaded] = React.useState(false);
  const [user, setUser] = useState({});

  const getUser = async () => {
    try {
      setUser(await JSON.parse(localStorage.getItem("user")));
      if (user) {
        setAuthLoaded(true);

        setIsAuthenticated(true);
      } else {
        setAuthLoaded(true);

        setIsAuthenticated(false);

        window.location = "/signin";
      }
    } catch (error) {}
  };
  React.useEffect(() => {
    getUser();
  }, [isLoggedIn]);
 // console.log(`User`, user);
  const LogOut = () => {
    signout()(authDispatch);
  };

  return (
    <header class="navbar pcoded-header navbar-expand-lg navbar-light header-blue">
      <div class="container">
        <div class="m-header">
          <a class="mobile-menu" id="mobile-collapse" href="#!">
            <span></span>
          </a>
          <a href="#!" class="b-brand">
            <img
              src="assets/images/logo-small-prod-2.png"
              alt=""
              class="logo-main"
            />
          </a>

          <a href="#!" class="mob-toggler">
            <i class="feather icon-more-vertical"></i>
          </a>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a href="#!" class="pop-search">
                <i class="feather icon-search"></i>
              </a>
              <div class="search-bar">
                <input
                  type="text"
                  class="form-control border-0 shadow-none"
                  placeholder="Search hear"
                />
                <button type="button" class="close" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li>
              <div class="dropdown">
                <a class="dropdown-toggle" href="#" data-toggle="dropdown">
                  <i class="icon feather icon-bell"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right notification">
                  <div class="noti-head">
                    <h6 class="d-inline-block m-b-0">Notifications</h6>
                    <div class="float-right">
                      <a href="#!" class="m-r-10">
                        mark as read
                      </a>
                      <a href="#!">clear all</a>
                    </div>
                  </div>
                  <ul class="noti-body">
                    <li class="n-title">
                      <p class="m-b-0">NEW</p>
                    </li>
                    <li class="notification">
                      <div class="media">
                        <img
                          class="img-radius"
                          src="assets/images/user/avatar-1.jpg"
                          alt="Generic placeholder image"
                        />
                        <div class="media-body">
                          <p>
                            <strong>John Doe</strong>
                            <span class="n-time text-muted">
                              <i class="icon feather icon-clock m-r-10"></i>5
                              min
                            </span>
                          </p>
                          <p>New ticket Added</p>
                        </div>
                      </div>
                    </li>
                    <li class="n-title">
                      <p class="m-b-0">EARLIER</p>
                    </li>
                    <li class="notification">
                      <div class="media">
                        <img
                          class="img-radius"
                          src="assets/images/user/avatar-2.jpg"
                          alt="Generic placeholder image"
                        />
                        <div class="media-body">
                          <p>
                            <strong>Joseph William</strong>
                            <span class="n-time text-muted">
                              <i class="icon feather icon-clock m-r-10"></i>10
                              min
                            </span>
                          </p>
                          <p>Prchace New Theme and make payment</p>
                        </div>
                      </div>
                    </li>
                    <li class="notification">
                      <div class="media">
                        <img
                          class="img-radius"
                          src="assets/images/user/avatar-1.jpg"
                          alt="Generic placeholder image"
                        />
                        <div class="media-body">
                          <p>
                            <strong>Sara Soudein</strong>
                            <span class="n-time text-muted">
                              <i class="icon feather icon-clock m-r-10"></i>12
                              min
                            </span>
                          </p>
                          <p>currently login</p>
                        </div>
                      </div>
                    </li>
                    <li class="notification">
                      <div class="media">
                        <img
                          class="img-radius"
                          src="assets/images/user/avatar-2.jpg"
                          alt="Generic placeholder image"
                        />
                        <div class="media-body">
                          <p>
                            <strong>Joseph William</strong>
                            <span class="n-time text-muted">
                              <i class="icon feather icon-clock m-r-10"></i>30
                              min
                            </span>
                          </p>
                          <p>Prchace New Theme and make payment</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div class="noti-footer">
                    <a href="#!">show all</a>
                  </div>
                </div>
              </div>
            </li>
            <li>
              {user && (
                <div class="dropdown drp-user">
                  <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    <i class="feather icon-user"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right profile-notification">
                    <div class="pro-head">
                      <img
                        src="assets/images/user/avatar-1.jpg"
                        class="img-radius"
                        alt="User-Profile-Image"
                      />
                      <span>{user.FullName}</span>
                      <a
                        href="auth-signin.html"
                        class="dud-logout"
                        title="Logout"
                      >
                        <i class="feather icon-log-out"></i>
                      </a>
                    </div>
                    <ul class="pro-body">
                      <li>
                        <a href="/user-profile" class="dropdown-item">
                          <i class="feather icon-user"></i> Profile
                        </a>
                      </li>
                      <li>
                        <a
                          href={`/user-subscription/?userId=${user.UserId}`}
                          class="dropdown-item"
                        >
                          <i class="feather icon-box"></i> My Subscription
                        </a>
                      </li>
                      <li>
                        <a
                          href={`/my-messages/?userId=${user.UserId}`}
                          class="dropdown-item"
                        >
                          <i class="feather icon-mail"></i> My Messages
                        </a>
                      </li>
                      <li>
                        <a href="#" class="dropdown-item" onClick={LogOut}>
                          <i class="feather icon-lock"></i> Lock Screen
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default TopHeaderBar;
