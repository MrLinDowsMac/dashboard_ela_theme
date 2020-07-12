import React from "react";

function SideBarComponent() {
    return(
        <div className="left-sidebar">
            {/* <!-- Sidebar scroll--> */}
            <div className="scroll-sidebar">
                {/* <!-- Sidebar navigation--> */}
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        <li className="nav-devider"></li>
                        <li className="nav-label">Home</li>
                        <li className="">
                            <a className="has-arrow  " href="#" aria-expanded="false"><i className="fa fa-tachometer"></i><span className="hide-menu">Dashboard <span className="label label-rouded label-primary pull-right">2</span></span></a>
                            <ul aria-expanded="false" className="collapse">
                                <li className=""><a href="">Ecommerce </a></li>
                                <li className=""><a href="">Analytics </a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default SideBarComponent