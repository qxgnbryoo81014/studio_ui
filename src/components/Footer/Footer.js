import React, { Fragment } from "react";

// const Footer = props => (
const Footer = props => {
    let footerV1 = null;
    let footerV2 = null;
    let copyright = null;

    footerV1 = (
        <div className="footer1-section section section-padding">
            <div className="container">
                <div className="row text-center row-cols-1">

                    <div className="footer1-logo col text-center">
                        <img src="/images/web_logo3.png" alt="test" />
                    </div>

                    <div className="footer1-menu col">
                        <ul className="widget-menu justify-content-center">
                            <li><a href="https://aws.amazon.com/tw/">聯絡我們</a></li>
                            <li><a href="https://aws.amazon.com/tw/">問與答</a></li>
                            <li><a href="https://aws.amazon.com/tw/">退貨政策</a></li>
                            <li><a href="https://aws.amazon.com/tw/">服務條款</a></li>
                            {/* <li><a href="contact-us.html">聯絡我們</a></li>
                        <li><a href="elements-faq.html">問與答</a></li>
                        <li><a href="element-return.html">退貨政策</a></li>
                        <li><a href="element-termsofservice.html">服務條款</a></li> */}
                        </ul>
                    </div>
                    <div className="footer1-subscribe d-flex flex-column col">


                        <div className="footer1-social col">
                            <ul className="widget-social justify-content-center">
                                <li className="hintT-top" data-hint="Facebook"> <a href="https://www.facebook.com/fany121105/photos/"><i className="fab fa-facebook-f"></i></a></li>
                                <li className="hintT-top" data-hint="Instagram"> <a href="https://www.instagram.com/studio4arttfa105/"><i className="fab fa-instagram"></i></a></li>
                                <li className="hintT-top" data-hint="Youtube"> <a href="https://youtu.be/YF5OK4_PEJM"><i className="fab fa-youtube"></i></a></li>
                            </ul>
                        </div>
                        <div className="footer1-copyright col">
                            <p className="copyright">&copy; 2022 studio4art. All Rights Reserved | <strong>(02) 27120589</strong> | <a href="mailto:cs@studio4art.com">studio4arttfa105@gmail.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    footerV2 = (
        <div className="footer2-section section section-padding">
            <div className="container">
                <div className="row learts-mb-n40">

                    <div className="col-lg-6 learts-mb-40">
                        <div className="widget-about">
                            <img src="assets/images/logo/logo-2.webp" alt="" />
                            <p>為我們的生活點綴，挪出一些時間與空間相互分享創作的樂趣與想法，願能成為更好的自己</p>
                        </div>
                    </div>

                    <div className="col-lg-4 learts-mb-40">
                        <div className="row">
                            <div className="col">
                                <ul className="widget-list">
                                    <li><a href="about-us.html">關於我們</a></li>
                                    <li><a href="contact-us.html">聯絡我們</a></li>
                                    <li><a href="element-termsofservice.html">服務條款</a></li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul className="widget-list">
                                    <li><a href="elements-faq.html">問與答</a></li>
                                    <li><a href="element-return.html">退貨政策</a></li>
                                    <li><a href="index.html">回到首頁</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2 learts-mb-40">
                        <ul className="widget-list">
                            <li> <i className="fab fa-facebook-f"></i> <a href="https://www.facebook.com/fany121105/photos/">Facebook</a></li>
                            <li> <i className="fab fa-instagram"></i> <a href="https://www.instagram.com/studio4arttfa105/">Instagram</a></li>
                            <li> <i className="fab fa-youtube"></i> <a href="https://youtu.be/YF5OK4_PEJM">Youtube</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )

    copyright = (
        <div className="footer2-copyright section">
            <div className="container">
                <p className="copyright text-center">&copy; 2022 studio4art All Rights Reserved</p>
            </div>
        </div>
    )

    return (
        <Fragment>
            {props.version === 1 && footerV1}
            {props.version === 2 && footerV2 }
            {props.version === 2 && copyright}
        </Fragment>
    );
}
export default Footer;