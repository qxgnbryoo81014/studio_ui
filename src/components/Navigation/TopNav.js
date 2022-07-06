// import React, { useCallback } from 'react';
import React, { Fragment } from 'react';
// import './App.css';
// import logo from './c'

// import { Link, NavLink } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import * as actions from '../../actions';
// import Countdown from 'react-countdown';
// import App from '../../App';
// import cookie from 'react-cookies';

const TopNav = props => {

    let topNavOptions = null;
    let topNavFloat = null;
    let wishlist = null;
    let cart = null;
    let topNavMobile = null;
    let mobileMenu = null;
    
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

    topNavOptions = (
        <div className="header-section section bg-white d-none d-xl-block">
            <div className="container">
                <div className="row row-cols-lg-3 align-items-center">
                    <div className="col">
                        <div className="header-logo">
                            <a href="/lalalu"><img src="/images/web logo1.png" alt="studio4art Logo" /></a>
                        </div>
                    </div>
                    <div className="col">
                        <nav className="site-main-menu menu-height-100 justify-content-center">
                            <ul>
                                {/* <li className="has-children"><a href="https://aws.amazon.com/tw/"><span className="menu-text">商品專區</span></a> */}
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

                                {/* <li className="has-children"><a href="https://aws.amazon.com/tw/"><span className="menu-text">手作課程</span></a> */}
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
                                <a href="/loginRegister"><i className="fal fa-user"></i></a>
                            </div>

                            <div className="header-wishlist">
                                {/* <a href="#offcanvas-wishlist" className="offcanvas-toggle"><span className="wishlist-count">0</span><i className="fal fa-heart"></i></a> */}
                                <a href="#offcanvas-wishlist" className="offcanvas-toggle"><span className="wishlist-count">0</span><i className="fal fa-heart"></i></a>
                            </div>
                            <div className="header-cart">
                                {/* <a href="#offcanvas-cart" className="offcanvas-toggle"><span className="cart-count">0</span><i className="fal fa-shopping-cart"></i></a> */}
                                <a href="#offcanvas-cart" className="offcanvas-toggle"><span className="cart-count">0</span><i className="fal fa-shopping-cart"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    topNavFloat = (
        <div className="sticky-header header-menu-center section bg-white d-none d-xl-block">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col">
                        <div className="header-logo">
                            <a href="index.html"><img src="/images/logo/logo-2.webp" alt="studio4art  Logo" /></a>
                        </div>
                    </div>
                    <div className="col d-none d-xl-block">
                        <nav className="site-main-menu justify-content-center">
                            <ul>
                                <li className="has-children"><a href="https://aws.amazon.com/tw/"><span className="menu-text">商品專區</span></a>
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
                                <li className="has-children"><a href="https://aws.amazon.com/tw/"><span className="menu-text">手作課程</span></a>
                                    <ul className="sub-menu">
                                        <li><a href="https://aws.amazon.com/tw/"><span className="menu-text">報名課程</span></a></li>
                                    </ul>
                                </li>
                                <li className="has-children"><a href="https://aws.amazon.com/tw/"><span className="menu-text">關於我們</span></a>
                                    <ul className="sub-menu">
                                        <li><a href="https://aws.amazon.com/tw/"><span className="menu-text">關於studio4art</span></a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-auto">
                        <div className="header-tools justify-content-end">
                            <div className="header-login">
                                <a href="/loginRegister"><i className="fal fa-user"></i></a>
                            </div>

                            <div className="header-wishlist">
                                <a href="#offcanvas-wishlist" className="offcanvas-toggle"><span className="wishlist-count">3</span><i className="fal fa-heart"></i></a>
                            </div>
                            <div className="header-cart">
                                <a href="#offcanvas-cart" className="offcanvas-toggle"><span className="cart-count">3</span><i className="fal fa-shopping-cart"></i></a>
                            </div>
                            <div className="mobile-menu-toggle d-xl-none">
                                <a href="#offcanvas-mobile-menu" className="offcanvas-toggle">
                                    <svg viewBox="0 0 800 600">
                                        <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" className="top"></path>
                                        <path d="M300,320 L540,320" className="middle"></path>
                                        <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" className="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );

    wishlist = (
        <div id="offcanvas-wishlist" className="offcanvas offcanvas-wishlist">
            <div className="inner">
                <div className="head">
                    <span className="title">Wishlist</span>
                    <button className="offcanvas-close">x</button>
                </div>
                <div className="body customScroll">
                    <ul className="minicart-product-list">
                        <li>
                            <a href="https://aws.amazon.com/tw/" className="image"><img src="images/product/cart-product-1.webp" alt="Cart product" /></a>
                            <div className="content">
                                <a href="https://aws.amazon.com/tw/" className="title">Walnut Cutting Board</a>
                                <span className="quantity-price">1 x <span className="amount">$100.00</span></span>
                                <a href="https://aws.amazon.com/tw/" className="remove">x</a>
                            </div>
                        </li>
                        <li>
                            <a href="https://aws.amazon.com/tw/" className="image"><img src="images/product/cart-product-2.webp" alt="Cart product" /></a>
                            <div className="content">
                                <a href="https://aws.amazon.com/tw/" className="title">Lucky Wooden Elephant</a>
                                <span className="quantity-price">1 x <span className="amount">$35.00</span></span>
                                <a href="https://aws.amazon.com/tw/" className="remove">x</a>
                            </div>
                        </li>
                        <li>
                            <a href="https://aws.amazon.com/tw/" className="image"><img src="images/product/cart-product-3.webp" alt="Cart product" /></a>
                            <div className="content">
                                <a href="https://aws.amazon.com/tw/" className="title">Fish Cut Out Set</a>
                                <span className="quantity-price">1 x <span className="amount">$9.00</span></span>
                                <a href="https://aws.amazon.com/tw/" className="remove">x</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="foot">
                    <div className="buttons">
                        <a href="https://aws.amazon.com/tw/" className="btn btn-dark btn-hover-primary">view wishlist</a>
                    </div>
                </div>
            </div>
        </div>
    );

    cart = (
        <div id="offcanvas-cart" className="offcanvas offcanvas-cart">
            <div className="inner">
                <div className="head">
                    <span className="title">購物車</span>
                    <p className="minicart-message">所有商品免運費！</p>
                    <button className="offcanvas-close">×</button>
                </div>
                <div className="body customScroll" style={{ overflow: "auto !important" }}>
                    <ul className="minicart-product-list" >

                    </ul>
                </div>
                <div className="foot">
                    <div className="sub-total">
                        <strong>小計 :</strong>
                        <span className="miniCartTotal">$144.00</span>
                    </div>
                    <div className="buttons">
                        <a href="https://aws.amazon.com/tw/" className="btn btn-dark btn-hover-primary">查看購物車</a>
                        <a href="https://aws.amazon.com/tw/" className="btn btn-outline-dark">前往結帳</a>
                        {/* <a href="shopping-cart.jsp" className="btn btn-dark btn-hover-primary">查看購物車</a>
                    <a href="checkout.html" className="btn btn-outline-dark">前往結帳</a> */}
                    </div>
                </div>
            </div>
        </div>
    );

    topNavMobile = (
        <div className="mobile-header bg-white section d-xl-none">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col">
                        <div className="header-logo">
                            {/* <a href="index.html"><img src="/images/logo/logo-2.webp" alt="studio4art Logo" /></a> */}
                            <a href="https://aws.amazon.com/tw/"><img src="/images/logo/logo-2.webp" alt="studio4art Logo" /></a>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="header-tools justify-content-end">
                            <div className="header-login d-none d-sm-block">
                                {/* <a href="login-register.html"><i className="fal fa-user"></i></a> */}
                                <a href="https://aws.amazon.com/tw/"><i className="fal fa-user"></i></a>
                            </div>
                            <div className="header-search d-none d-sm-block">
                                <a href="/loginRegister" className="offcanvas-toggle"><i className="fal fa-search"></i></a>
                            </div>
                            <div className="header-wishlist d-none d-sm-block">
                                <a href="#offcanvas-wishlist" className="offcanvas-toggle"><span className="wishlist-count">0</span><i className="fal fa-heart"></i></a>
                            </div>
                            <div className="header-cart">
                                <a href="#offcanvas-cart" className="offcanvas-toggle"><span className="cart-count">0</span><i className="fal fa-shopping-cart"></i></a>
                            </div>
                            <div className="mobile-menu-toggle">
                                <a href="#offcanvas-mobile-menu" className="offcanvas-toggle">
                                    <svg viewBox="0 0 800 600">
                                        <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" className="top"></path>
                                        <path d="M300,320 L540,320" className="middle"></path>
                                        <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" className="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );

    mobileMenu = (
        <div id="offcanvas-mobile-menu" className="offcanvas offcanvas-mobile-menu">
            <div className="inner customScroll">
                <div className="offcanvas-menu-search-form">
                    {/* <form action="#"> */}
                    <form action="#">
                        <input type="text" placeholder="Search..." />
                        <button><i className="fal fa-search"></i></button>
                    </form>
                </div>
                <div className="offcanvas-menu">
                    <ul>
                        {/* <li><a href="#"><span className="menu-text">商品專區</span></a> */}
                        <li><a href="https://aws.amazon.com/tw/"><span className="menu-text">商品專區</span></a>
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
                        {/* <li><a href="#"><span className="menu-text">手作課程</span></a> */}
                        <li><a href="https://aws.amazon.com/tw/"><span className="menu-text">手作課程</span></a>
                            <ul className="sub-menu">
                                {/* <li><a href="courseList.html"><span className="menu-text">報名課程</span></a></li> */}
                                <li><a href="https://aws.amazon.com/tw/"><span className="menu-text">報名課程</span></a></li>
                            </ul>
                        </li>
                        {/* <li><a href="#"><span className="menu-text">關於我們</span></a> */}
                        <li><a href="https://aws.amazon.com/tw/"><span className="menu-text">關於我們</span></a>
                            <ul className="sub-menu">
                                {/* <li><a href="about-us.html"><span className="menu-text">關於studio4art</span></a></li> */}
                                <li><a href="https://aws.amazon.com/tw/"><span className="menu-text">關於studio4art</span></a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="offcanvas-buttons">
                    <div className="header-tools">
                        <div className="header-login">
                            {/* <a href="login-register.html"><i className="fal fa-user"></i></a> */}
                            <a href="/loginRegister"><i className="fal fa-user"></i></a>
                        </div>
                        <div className="header-wishlist">
                            {/* <a href="wishlist.html"><span>0</span><i className="fal fa-heart"></i></a> */}
                            <a href="https://aws.amazon.com/tw/"><span>0</span><i className="fal fa-heart"></i></a>
                        </div>
                        <div className="header-cart">
                            {/* <a href="shopping-cart.jsp"><span className="cart-count">0</span><i className="fal fa-shopping-cart"></i></a> */}
                            <a href="https://aws.amazon.com/tw/"><span className="cart-count">0</span><i className="fal fa-shopping-cart"></i></a>
                        </div>
                    </div>
                </div>
                <div className="offcanvas-social">
                    <a href="https://www.facebook.com/fany121105/photos/"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/studio4arttfa105/"><i className="fab fa-instagram"></i></a>
                    <a href="https://youtu.be/YF5OK4_PEJM"><i className="fab fa-youtube"></i></a>
                </div>
            </div>
        </div>
    )

    return (
        <Fragment>
            {/* // <nav className="nav-box"> */}
            {/* <div className="nav-left">
                <div className="logo"><img src="../images/logo.png" alt="客戶管理系統" /></div>
            </div> */}

            {/* {props.showOptions && topNavOptions} */}

            {topNavOptions}
            {topNavFloat}
            {wishlist}
            {cart}
            {topNavMobile}
            {mobileMenu}
            <div className="offcanvas-overlay"></div>


            {/* <div className="offcanvas-overlay"></div> */}

            {/* // </nav> */}
        </Fragment>
    );
}

export default TopNav;