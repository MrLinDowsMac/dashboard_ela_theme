import React from "react";

import logo from '../../styles/images/logo.png'
import logotext from '../../styles/images/logo-text.png'
import userpic from '../../styles/images/users/5.jpg'
//import bootstrap from "bootstrap";
//import '../custom.css';

const HeaderComponent = () => {
    return (
      <div className="header">
        <nav className="navbar top-navbar navbar-expand-md navbar-light">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">
              <b><img src={logo} alt="homepage" className="dark-logo" /></b>
              <span><img src={logotext} alt="homepage" className="dark-logo" /></span>
            </a>
          </div>

          <div className="navbar-collapse">
            {/* <!-- toggle and nav items --> */}
            <ul className="navbar-nav mr-auto mt-md-0">
            </ul>

            {/* <!-- User profile and search --> */}
            <ul className="navbar-nav my-lg-0">
                <li className="nav-item hidden-sm-down search-box">
                    {/* <a className="nav-link hidden-sm-down text-muted" href=''><i className="ti-search"></i></a>
                    <form className="app-search">
                        <input type="text" className="form-control" placeholder="Search here"/> <a className="srh-btn"><i className="ti-close"></i></a>
                    </form> */}
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-muted text-muted " href='/'  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fa fa-bell"></i>
                        <div className="notify"> <span className="heartbit"></span> <span className="point"></span> </div>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right mailbox animated zoomIn">
                      <ul>
                        <li>
                            <div className="drop-title">Notifications</div>
                        </li>
                        <li>
                          <div className="message-center">
                              {/* Implement messages here */}
                          </div>
                        </li>
                        <li>
                           <a className="nav-link text-center" href="/" > <strong>Check all notifications</strong> <i className="fa fa-angle-right"></i> </a>
                        </li>
                      </ul>
                    </div>
                </li>
                
                {/* <!-- Messages --> */}
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-muted  " href="/" id="2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fa fa-envelope"></i>
                        <div className="notify"> <span className="heartbit"></span> <span className="point"></span> </div>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right mailbox animated zoomIn" aria-labelledby="2">
                        <ul>
                            <li>
                                <div className="drop-title">You have 4 new messages</div>
                            </li>
                            <li>
                                <div className="message-center">
                                  {/* Implement messages */}
                                </div>
                            </li>
                            <li>
                                <a className="nav-link text-center" href="/"> <strong>See all e-Mails</strong> <i className="fa fa-angle-right"></i> </a>
                            </li>
                        </ul>
                    </div>
                </li>

                {/* <!-- Profile --> */}
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-muted  " href="/" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src={userpic} alt="user" className="profile-pic" /></a>
                    <div className="dropdown-menu dropdown-menu-right animated zoomIn">
                        <ul className="dropdown-user">
                            <li><a href="/"><i className="ti-user"></i> Profile</a></li>
                            <li><a href="/"><i className="ti-wallet"></i> Balance</a></li>
                            <li><a href="/"><i className="ti-email"></i> Inbox</a></li>
                            <li><a href="/"><i className="ti-settings"></i> Setting</a></li>
                            <li><a href="/"><i className="fa fa-power-off"></i> Logout</a></li>
                        </ul>
                    </div>
                </li>

            </ul>

          </div>

        </nav>
      </div>
    );
  }

export default HeaderComponent;

