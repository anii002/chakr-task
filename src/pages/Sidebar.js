/* eslint-disable jsx-a11y/anchor-is-valid */
import images from "../images/index";

function sidebar() {
    return (
        <div className="col-lg-2 col-sm-3 sidebar pt-2 m-0" >
            <div className="sidebar-sticky  m-0 bg-white rounded-3">
                <ul className="nav flex-column px-1">
                    <li className="position-relative orange">
                        <img src={images.Ellipse} alt="icon" />
                        <img className="position-absolute dot" src={images.union} alt="icon" />
                        <img className="mx-1" src={images.frame} alt="icon" />
                    </li>
                    <li className="mt-2">
                        <div className="has-search">
                            <span className="fa fa-search form-control-feedback"></span>
                            <input type="text" className="form-control" placeholder="Search" />
                        </div>
                    </li>
                    <li className="mt-3">
                        <a href="#">
                            <img className="img" src={images.Dashboard} alt="Dashboard" /> Dashboard
                        </a>
                    </li>
                    <li className="mt-3">
                        <a className=" collapsed d-flex" href="#" data-bs-toggle="collapse" data-bs-target="#collapseHelp" aria-expanded="false" aria-controls="collapseHelp">
                            <img src={images.user} alt="user" />  Customers
                            <div className="sb-sidenav-collapse-arrow mx-5">
                                <img src={images.arrow} alt="arrow" />
                            </div>
                        </a>
                        <div className="collapse" id="collapseHelp" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">
                                <a className="nav-link" href="layout-static.html">Static Navigation</a>
                                <a className="nav-link" href="layout-sidenav-light.html">Light Sidenav</a>
                            </nav>
                        </div>
                    </li>
                    <li className="mt-3">
                        <a className="" href="#">
                            <img src={images.report} alt="report" />  All reports
                        </a>
                    </li>
                    <li className="mt-3">
                        <a className="" href="#">
                            <img src={images.geography} alt="geography" /> Geography
                        </a>
                    </li>
                    <li className="mt-3">
                        <a className="" href="#">
                            <img src={images.message} alt="message" /> Conversations
                        </a>
                    </li>
                    <li className="mt-3">
                        <a className="" href="#">
                            <img src={images.deals} alt="deals" /> Deals
                        </a>
                    </li>
                    <li className="mt-3 ">
                        <a className="" href="#">
                            <img src={images.share} alt="exportsvg" /> Export
                        </a>
                    </li>
                    <li className="admin d-flex align-items-center">
                        <div className=" image-sec">
                            <img src={images.icon} alt="icon" />
                        </div>
                        <div className="name mx-2">
                            <p>Gustavo Xavier</p>
                            <a className="px-2"> Admin </a>
                        </div>
                    </li>
                    <li className="mt-2 ">
                        <a className="" href="#">
                            <img src={images.setting} alt="setting" /> setting
                        </a>
                    </li>
                    <li className="mt-2">
                        <a className=" logout" href="#">
                            <img src={images.logout} alt="logout" /> logout
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default sidebar; 