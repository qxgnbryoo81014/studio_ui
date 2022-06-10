// import React, { useCallback } from 'react';

import React from 'react';
// import logo from './c'

// import { Link, NavLink } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import * as actions from '../../actions';
// import Countdown from 'react-countdown';
// import App from '../../App';
// import cookie from 'react-cookies';

const TopNav = props => {
    // const dispatch = useDispatch();
    // const logout = useCallback(() => dispatch(actions.logout()), [dispatch]);
    // const userJson = sessionStorage.getItem('user');
    // const user = userJson === null? {account:'', role : {groupName : '', }, userDetail : {name: ''}} : JSON.parse(userJson).user;
    
    // const perfomLogout = () => {
    //     //清除cookies
    //     cookie.remove('X-CRM-Token');
    //     cookie.remove('RequestAccount');
    //     cookie.remove('captchaID');
    //     logout();
    // }
    
    // const renderer = ({ minutes, seconds, completed }) => {
    // 	return <span> {minutes}:{seconds}</span>;
    // };
    console.log("public:%PUBLIC_URL%"+process.env.PUBLIC_URL+`{%PUBLIC_URL%}`);

    const topNavOptions = (
        <div className="container">
            <div className="row row-cols-lg-3 align-items-center">
                  <div className="col">
                      <div className="header-logo">
                          <a href="/lalalu"><img src="/images/web logo1.png" alt="studio4art Logo"/></a>
                      </div>
                  </div>
                  <div className="col">
                      <nav className="site-main-menu menu-height-100 justify-content-center">
                          <ul>
                              {/* <li className="has-children"><a href="#"><span className="menu-text">商品專區</span></a> */}
                              <li className="has-children"><a href="#!"><span className="menu-text">商品專區</span></a>
                                  <ul className="sub-menu">
                                      <li><a href="https://aws.amazon.com/tw/"><span className="menu-text">全部商品</span></a></li>
                                      <li><a href="https://aws.amazon.com/tw/"><span className="menu-text">手繪瓷盤</span></a></li>
                                      <li><a href="https://aws.amazon.com/tw/"><span className="menu-text">電烙畫</span></a></li>
                                      <li><a href="https://aws.amazon.com/tw/"><span className="menu-text">釉燒陶</span></a></li>
                                      <li><a href="https://aws.amazon.com/tw/"><span className="menu-text">彩色鉛筆</span></a></li>
                                      <li><a href="https://aws.amazon.com/tw/"><span className="menu-text">水彩</span></a></li>
                                      <li><a href="https://aws.amazon.com/tw/"><span className="menu-text">壓克力彩繪</span></a></li>
                                  </ul>
                              </li>
                              
                              {/* <li className="has-children"><a href="#"><span className="menu-text">手作課程</span></a> */}
                              <li className="has-children"><a href="#!"><span className="menu-text">手作課程</span></a>
                                  <ul className="sub-menu">
                                              {/* <li><a href="courseList.html"><span className="menu-text">報名課程</span></a></li> */}
                                              <li><a href="https://aws.amazon.com/tw/"><span className="menu-text">報名課程</span></a></li>
                                   </ul>
                              </li>
                              <li className="has-children"><a href="#!"><span className="menu-text">關於我們</span></a>
                                  <ul className="sub-menu">
                                      <li><a href="https://aws.amazon.com/tw/"><span className="menu-text">關於studio4art</span></a></li>
                                      <li><a href="https://aws.amazon.com/tw/"><span className="menu-text">關於studio4art</span></a></li>
                                  </ul>
                              </li>
                          </ul>
                      </nav>
                  </div>
                <div className="col">
                    <div className="header-tools justify-content-end">
                        <div className="header-login">
                            {/* <a href="login-register.html"><i className="fal fa-user"></i></a> */}
                            <a href="https://aws.amazon.com/tw/"><i className="fal fa-user"></i></a>
                        </div>
                        
                        <div className="header-wishlist">
                            {/* <a href="#offcanvas-wishlist" className="offcanvas-toggle"><span className="wishlist-count">0</span><i className="fal fa-heart"></i></a> */}
                            <a href="https://aws.amazon.com/tw/" className="offcanvas-toggle"><span className="wishlist-count">0</span><i className="fal fa-heart"></i></a>
                        </div>
                        <div className="header-cart">
                            {/* <a href="#offcanvas-cart" className="offcanvas-toggle"><span className="cart-count">0</span><i className="fal fa-shopping-cart"></i></a> */}
                            <a href="https://aws.amazon.com/tw/" className="offcanvas-toggle"><span className="cart-count">0</span><i className="fal fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <nav className="nav-box">
            {/* <div className="nav-left">
                <div className="logo"><img src="../images/logo.png" alt="客戶管理系統" /></div>
            </div> */}

            {props.showOptions && topNavOptions}

        </nav>
    );
}

export default TopNav;