/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import images from "../images";
import { Dropdown } from 'react-bootstrap';
import SemiCircleProgressBar from "react-progressbar-semicircle";
import BarChart from "../Charts/BarChart";
import ProgressBar from '@ramonak/react-progress-bar';

function Dashboard() {
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedItem1, setSelectedItem1] = useState(null);

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };
    const handleItemClick1 = (item) => {
        setSelectedItem1(item);
    };

    return (
        <div className="ml-sm-auto col-lg-10 p-2" >
            <div className="d-flex main flex-wrap justify-content-between col-lg-12">
                <div className="Revenues  rounded-3 p-3">
                    <a className="title">Revenues</a>
                    <p className="percent mt-2">15% <img src={images.upperarrow} alt="arrow" /></p>
                    <p className="sub-title">Increase compared to last week</p>
                    <p className="report mt-5">Revenues report <img src={images.sharetir} alt="share" /></p>
                </div>
                <div className="Revenues  rounded-3 p-3">
                    <a className="title">Lost deals</a>
                    <p className="percent mt-2">4% </p>
                    <p className="sub-title">You closed 96 out of 100 deals</p>
                    <p className="report mt-5">All deals <img src={images.sharetir} alt="share" /></p>
                </div>
                <div className="quarter  rounded-3  p-3">
                    <a className="title d-flex justify-content-center">Quarter goal</a>
                    <div className="d-flex justify-content-center mt-3 mb-4" >
                        <SemiCircleProgressBar
                        stroke="#FFCD71" background="#FFF7E8" strokeWidth="19" percentage={84} showPercentValue
                    />
                    </div>
                    <p className="report d-flex justify-content-center">All goals <img src={images.sharetir} alt="share" /></p>
                </div>
            </div>
            <div className="d-flex flex-wrap  justify-content-between pt-2 col-lg-12">
                <div className="col-lg-6 col-sm-12 customers bg-white rounded-3 p-3">
                    <div className="d-flex justify-content-between align-items-center mb-3 px-2">
                        <p className="title">Customers</p>
                        <Dropdown className="custom-dropdown">
                            <Dropdown.Toggle variant="none" id="dropdown-basic" className="d-flex align-items-center">
                                {selectedItem ? selectedItem : <p >Sort by <span className="default-item">Newest</span></p>}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => handleItemClick('Item 1')}>Item 1</Dropdown.Item>
                                <Dropdown.Item onClick={() => handleItemClick('Item 2')}>Item 2</Dropdown.Item>
                                <Dropdown.Item onClick={() => handleItemClick('Item 3')}>Item 3</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="users  d-flex justify-content-between align-items-center mb-3 mx-2">
                        <div className="d-flex detail">
                            <div className="image-sec">
                                <img src={images.icon} alt="img" />
                            </div>
                            <div className="name mx-2">
                                <p> Chris Friedkly</p>
                                <a> Supermarket Villanova</a>
                            </div>
                        </div>
                        {/* <div>
                            <a href="#"><img className="px-2" src={images.msg} alt="msg" /></a>
                            <a href="#"> <img className="px-2" src={images.star} alt="star" /></a>
                            <a href="#"><img className="px-2 " src={images.pen} alt="pen" /></a>
                            <a href="#"> <img src={images.more} alt="more" /></a>
                        </div> */}
                    </div>
                    <div className="users users-bg  d-flex justify-content-between align-items-center mb-3 mx-2">
                        <div className="d-flex detail">
                            <div className="image-sec">
                                <img src={images.icon} alt="img" />
                            </div>
                            <div className="name mx-2">
                                <p> Chris Friedkly</p>
                                <a> Supermarket Villanova</a>
                            </div>
                        </div>
                        <div>
                            <a href="#"><img className="px-2" src={images.msg} alt="msg" /></a>
                            <a href="#"> <img className="px-2" src={images.star} alt="star" /></a>
                            <a href="#"><img className="px-2 " src={images.pen} alt="pen" /></a>
                            <a href="#"> <img src={images.more} alt="more" /></a>
                        </div>
                    </div>
                    <div className="users  d-flex justify-content-between align-items-center mb-3 mx-2">
                        <div className="d-flex detail">
                            <div className="image-sec">
                                <img src={images.icon} alt="img" />
                            </div>
                            <div className="name mx-2">
                                <p> Chris Friedkly</p>
                                <a> Supermarket Villanova</a>
                            </div>
                        </div>
                        {/* <div>
                            <a href="#"><img className="px-2" src={images.msg} alt="msg" /></a>
                            <a href="#"> <img className="px-2" src={images.star} alt="star" /></a>
                            <a href="#"><img className="px-2 " src={images.pen} alt="pen" /></a>
                            <a href="#"> <img src={images.more} alt="more" /></a>
                        </div> */}
                    </div>
                    <div className="users  d-flex justify-content-between align-items-center mb-3 mx-2">
                        <div className="d-flex detail">
                            <div className="image-sec">
                                <img src={images.icon} alt="img" />
                            </div>
                            <div className="name mx-2">
                                <p> Chris Friedkly</p>
                                <a> Supermarket Villanova</a>
                            </div>
                        </div>
                        {/* <div>
                            <a href="#"><img className="px-2" src={images.msg} alt="msg" /></a>
                            <a href="#"> <img className="px-2" src={images.star} alt="star" /></a>
                            <a href="#"><img className="px-2 " src={images.pen} alt="pen" /></a>
                            <a href="#"> <img src={images.more} alt="more" /></a>
                        </div> */}
                    </div>
                    <p className="px-3 mt-2">All customers <img src={images.sharetir} alt="share" /></p>
                </div>
                <div className="col-lg-6 col-sm-12 growth rounded-3">
                    <div className="mb-2 customers bg-white rounded-3 p-3 ">
                        <div className="d-flex justify-content-between align-items-center px-2">
                            <p className="title">Growth</p>
                            <Dropdown className="custom-dropdown">
                                <Dropdown.Toggle variant="none" id="dropdown-basic" className="d-flex align-items-center">
                                    {selectedItem1 ? selectedItem1 : <p >Yearly</p>}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => handleItemClick1('Item 1')}>Item 1</Dropdown.Item>
                                    <Dropdown.Item onClick={() => handleItemClick1('Item 2')}>Item 2</Dropdown.Item>
                                    <Dropdown.Item onClick={() => handleItemClick1('Item 3')}>Item 3</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="p-3">
                            <BarChart />
                        </div>
                    </div>
                    <div className="d-flex justify-content-between ">
                        <div className="month-sec  rounded-3 p-2 px-3">
                            <p className="title">Top month</p>
                            <p className="month">November</p>
                            <p className="year">2019</p>
                        </div>
                        <div className="year-sec  rounded-3 mx-2 p-2 px-3">
                            <p className="title">Top year</p>
                            <p className="month">2023</p>
                            <p className="year">96K sold so far</p>
                        </div>
                        <div className="buyer-sec  rounded-3 p-2 px-3">
                            <p className="title">Top buyer</p>
                            <div className="detail">
                                <div className="image-sec">
                                    <img className="img-fluid" src={images.icon} alt="img" />
                                </div>
                                <div className="name">
                                    <p> Maggie Johnson</p>
                                    <a> Oasis Organic Inc.</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-wrap justify-content-between py-2 col-lg-12">
                <div className="chat-sec bg-white  rounded-3 p-4">
                    <p>Chats</p>
                    <a>2 unread messages</a>
                    <div className="image-sec d-flex justify-content-around py-4">
                        <a href="#" className="position-relative">
                            <img className="img-fluid" src={images.icon} alt="img" />
                            <img className="img-fluid activedot" src={images.activedot} alt="activedot" />
                        </a>
                        <a href="#" className="position-relative">
                            <img className="img-fluid" src={images.icon} alt="img" />
                            <img className="img-fluid activedot" src={images.activedot} alt="activedot" />
                        </a>
                        <a href="#" className="position-relative bg-white">
                            <img className="img-fluid" src={images.icon} alt="img" />
                            {/* <img className="img-fluid activedot" src={images.activedot} alt="activedot" /> */}
                        </a>
                        <a href="#" className="position-relative bg-white">
                            <img className="img-fluid" src={images.icon} alt="img" />
                            {/* <img className="img-fluid activedot" src={images.activedot} alt="activedot" /> */}
                        </a>
                    </div>
                </div>
                <div className="top-state-sec bg-white  rounded-3  p-4">
                    <p>Top states</p>
                    <div className="bar-info">
                        <p>NY</p>
                        <ProgressBar className="abc mt-3" labelColor="#000000" baseBgColor="#ffffff" completed={80} borderRadius="4px" height="24px" bgColor=" linear-gradient(90deg, #FFCD71 -2.57%, rgba(255, 205, 113, 0.00) 112.5%)" />
                        <p>MA</p>
                        <ProgressBar className="abc mt-2" labelColor="#000000" baseBgColor="#ffffff" completed={60} borderRadius="4px" height="24px" bgColor=" linear-gradient(90deg, #FFCD71 -2.57%, rgba(255, 205, 113, 0.00) 112.5%)" />
                        <p>NH</p>
                        <ProgressBar className="abc mt-2" labelColor="#000000" baseBgColor="#ffffff" completed={40} borderRadius="4px" height="24px" bgColor=" linear-gradient(90deg, #FFCD71 -2.57%, rgba(255, 205, 113, 0.00) 112.5%)" />
                        <p>OR</p>
                        <ProgressBar className="abc mt-2" labelColor="#000000" baseBgColor="#ffffff" completed={30} borderRadius="4px" height="24px" bgColor=" linear-gradient(90deg, #FFCD71 -2.57%, rgba(255, 205, 113, 0.00) 112.5%)" />
                    </div>
                </div>
                <div className="Newdeals-sec bg-white   rounded-3 p-4">
                    <p>New deals</p>
                    <div className="row d-flex mt-2 px-2">
                        <a href="#" className="col  mb-2">
                            <img className="img-fluid" src={images.add} alt="img" />
                            Fruit2Go</a>
                        <a href="#" className="col  mb-2">
                            <img className="img-fluid" src={images.add} alt="img" /> Marshall's MKT
                        </a>
                        <a href="#" className="col  mb-2">
                            <img className="img-fluid mx-2" src={images.add} alt="img" />CCNT</a>
                        <a href="#" className="col  mb-2">
                            <img className="img-fluid" src={images.add} alt="img" />Joana Mini-market</a>
                        <a href="#" className="col  mb-2">
                            <img className="img-fluid" src={images.add} alt="img" />Little Brazil Vegan</a>
                        <a href="#" className="col  mb-2">
                            <img className="img-fluid" src={images.add} alt="img" />Target</a>
                        <a href="#" className="col  mb-2">
                            <img className="img-fluid" src={images.add} alt="img" />Organic Place</a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Dashboard;