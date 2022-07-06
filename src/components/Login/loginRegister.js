import React, { Fragment } from 'react';
import Footer from '../Footer/Footer';

const loginRegister = props => {

    let bannerImg = null;
    let loginForm = null;
    let registerForm = null;

    bannerImg = (
        <div className="page-title-section section" data-bg-image="/images/bg/login_backgrand.png">
            <div className="container">
                <div className="row">
                    <div className="col">

                        <div className="page-title">
                            <h1 className="title">Login & Register</h1>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li className="breadcrumb-item active">Login & Register</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

    loginForm = (
        <div className="col-lg-6">
            <div className="user-login-register bg-light">
                <div className="login-register-title">
                    <h2 className="title">登入帳號</h2>
                    <p className="desc">歡迎回來！ 用 studio4art 帳號登入</p>
                </div>
                <div className="login-register-form">
                    <form action="#">
                        <div className="col-12 learts-mb-50">
                            <br /><input type="email" placeholder="Email" name="customerEmail" id="loginEmail" />
                        </div>
                        <div className="col-12 learts-mb-50">
                            <br /><input type="password" placeholder="Password" name="customerPassword" id="loginPassword" />
                            <div className="col-12 text-center learts-mb-50">
                                <br /> <br />
                                <button className="btn btn-dark btn-outline-hover-dark btn_login">登入</button><br /><br />
                            </div>
                            <div className="col-12 learts-mb-50">
                                <div className="row learts-mb-n20">
                                    <div className="col-12 learts-mb-20">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="rememberMe" /> <label className="form-check-label" for="rememberMe">記住我的帳號</label>
                                        </div>
                                    </div>
                                    <div className="col-12 learts-mb-20">
                                        <a href="lost-password.html" className="fw-400">忘記密碼？</a>
                                    </div>
                                </div>
                            </div>
                            <div className="login-register-title">
                                {/* <h2 className="title">test</h2> */}
                                <br /><p className="desc">———— 或是用以下帳號繼續登入 ————</p>
                                <br /><br />
                                <div className="buttons">
                                    <a href="https://accounts.google.com/o/oauth2/auth?scope=https://www.googleapis.com%2Fauth%2Fuserinfo.email+https://www.googleapis.com%2Fauth%2Fuserinfo.profile&amp;state=/profile&amp;redirect_uri=http://localhost:7080/lend/Customer/login/oauth2/google&amp;response_type=code&amp;client_id=256304216081-u7ji7nb24h040688p9rq98mdnisr9ue7.apps.googleusercontent.com" className="btn btn-outline-dark" ><img src="/images/icons/search.png" width="25px" height="25px" alt="forced have alt attribute" />
                                    &emsp;&emsp;Google登入&emsp;&emsp;
                                    </a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

    registerForm = (
        <div class="col-lg-6">
            <div class="user-login-register">
                <div class="login-register-title">
                    <h2 class="title">註冊會員</h2>
                    <p class="desc">還不是會員嗎？ 立刻註冊新帳號！</p>
                </div>
                <div class="login-register-form">
                    <form action="#">
                        <div class="row learts-mb-n30">
                            <div class="col-12 learts-mb-20">
                                <label for="customerEmail">Email<abbr class="required">*</abbr></label>
                                <input type="email" placeholder="信箱" name="customerEmail" id="registEmail" />
                            </div>
                            <div class="col-12 learts-mb-20">
                                <label for="customerPassword">Password<abbr class="required">*</abbr></label>
                                <input type="password" placeholder="密碼" name="customerPassword" id="registPassword" />
                            </div>
                            <div class="col-12 learts-mb-20">
                                <label for="customerName">Name<abbr class="required">*</abbr></label>
                                <input type="text" placeholder="姓名" name="customerName" id="registName" />
                            </div>
                            <div class="col-12 learts-mb-20">
                                <label for="customerPhone">Phone<abbr class="required">*</abbr></label>
                                <input type="tel" placeholder="電話" name="customerPhone" id="registPhone" />
                            </div>
                            <div class="col-12 learts-mb-20">
                                <label for="customerAddress">Address<abbr class="required">*</abbr></label>
                                <input type="text" placeholder="寄送地址" name="customerAddress" id="registAddress" />
                            </div>
                            <div class="col-12 learts-mb-20">
                                <label for="bitrhday">Bitrhday<abbr class="required">*</abbr></label>
                                <input type="date" placeholder="生日" name="customerBirthday" id="registBitrhday" />
                            </div>

                            <div class="col-12 learts-mb-20">
                                <label for="gender">Gender<abbr class="required">*</abbr></label>
                                <div style={{display: "flex"}}>
                                    <label for="gender">男<input type="radio" name="customerGender" size="45" value="M" checked /></label> &emsp;&emsp;
                                    <label for="gender"> 女<input type="radio" name="customerGender" size="45" value="F" /></label>
                                </div>
                            </div>
                            <div class="col-12 learts-mb-50">
                                <p>按下註冊鈕的同時，表示您已詳閱我們的資料使用政策與使用條款，同意使用 studio4art 所提供的服務。</p>
                            </div>
                            <div class="col-12 text-center learts-mb-50">
                                <button class="btn btn-dark btn-outline-hover-dark btn_regist">註冊</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
    return (
        <Fragment>
            {bannerImg}
            <div className="section section-padding">
                <div className="container">
                    <div className="row g-0">
                        {loginForm}
                        {registerForm}
                    </div>
                </div>
            </div>
            <Footer version={2} />
        </Fragment>
    );
}

export default loginRegister;
