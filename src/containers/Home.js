// import React, { useState } from 'react';
import React, { Fragment } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
import Footer from '../components/Footer/Footer';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";

const Home = props => {
    const homeContent = (
        <>
            <div className="home1-slider swiper-container">
                <div className="swiper-wrapper">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 6000,
                            disableOnInteraction: false,
                        }}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        modules={[Autoplay, Pagination]}
                        // className="mySwiper"
                        style={{ width: "100%" }}
                    >
                        <SwiperSlide>
                            <div className="home1-slide-item swiper-slide" data-swiper-autoplay="5000" data-bg-image="/images/slider/home1/index_banner5.png">
                                <div className="home1-slide1-content">
                                    <span className="bg" data-bg-image="/images/slider/home1/slide-2-1.webp"></span>
                                    <span className="slide-border"></span>
                                    <span className="icon"><img src="/images/slider/home1/art.png" width="100" height="100" alt="Slide Icon" /></span>
                                    <h2 className="title">Color Pencil</h2>
                                    <h2 className="title">Drawing</h2>
                                    <h3 className="sub-title"> </h3>
                                    <div className="link"><a href="https://aws.amazon.com/tw/">LEARN MORE</a></div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="home1-slide-item swiper-slide" data-swiper-autoplay="5000" data-bg-image="/images/slider/home1/index_banner4.jpg">
                                <div className="home1-slide2-content">
                                    <span className="bg" data-bg-image="/images/slider/home1/slide-2-1.webp"></span>
                                    {/* <span className="slide-border"></span> */}
                                    <span className="icon">
                                        <img src="/images/slider/home1/slide-2-2.webp" alt="Slide Icon" />
                                        <img src="/images/slider/home1/slide-2-3.webp" alt="Slide Icon" />
                                    </span>
                                    <h3 className="sub-title"> IN PERSON CLASSES </h3>
                                    <div className="link"><a href="https://aws.amazon.com/tw/">親 自 教 學</a></div>
                                    <div className="link"><a href="https://aws.amazon.com/tw/">LEARN MORE</a></div>
                                </div>
                            </div>
                        </SwiperSlide>
                        {/* <div className="swiper-pagination"></div> */}
                        {/* <SwiperSlide>
                    <div className="home1-slide-item swiper-slide" data-swiper-autoplay="5000" data-bg-image="/images/slider/home1/index_banner2.png">
                        <div className="home1-slide3-content">
                        </div>
                    </div>
                </SwiperSlide> */}
                    </Swiper>
                </div>
            </div>

            <div className="section section-padding">
                <div className="container">
                    <div className="section-title text-center">
                        <h3 className="sub-title">test sub title</h3>
                        <h2 className="title title-icon-both">Making & crafting</h2>
                    </div>

                    <div className="row learts-mb-n40">

                        <div className="col-lg-5 col-md-6 col-12 me-auto learts-mb-40">
                            <div className="sale-banner1" data-bg-image="/images/banner/sale/sale-banner1-1.webp">
                                <div className="inner">

                                    <h2 className="sale-percent">手作藝品</h2>
                                    <h2 className="sale-percent">客製化 </h2>
                                    <h2 className="sale-percent">體驗課程 </h2>
                                    <img src="/images/banner/sale/sale-banner1-1.1.webp" alt="Sale Banner Icon" />

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12 learts-mb-40">
                            <div className="sale-banner2">
                                <div className="inner">
                                    <div className="image">
                                        {/* <img src="/images/banner/sale/in_person_classes2.PNG" alt="hello" /> */}
                                    </div>
                                    <div className="content row justify-content-between mb-n3">
                                        <div className="col-auto mb-3">
                                            <h2 className="sale-percent">親 自 教 學</h2>
                                            <span className="text">IN PERSON CLASSES</span>
                                        </div>
                                        <div className="col-auto mb-3">
                                            <a className="btn btn-hover-dark" href="https://aws.amazon.com/tw/">LEARN MORE</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section-title text-center">
                <h3 className="sub-title">Shop now</h3>
                <h2 className="title title-icon-both">Shop our best-sellers</h2>
            </div>

            <div className="section section-fluid section-padding pt-0">
                <div className="container">
                    <div className="category-banner1-carousel">

                        <div className="col">
                            <div className="category-banner1">
                                <div className="inner">
                                    <a href="https://aws.amazon.com/tw/" className="image"><img src="/images/banner/category/cat_plant.jpg" width="525px" height="270px" alt="bannerImg" /></a>
                                    <div className="content">
                                        <h3 className="title">
                                            <a href="https://aws.amazon.com/tw/">手繪瓷盤</a>
                                            <span className="number">3</span>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="category-banner1">
                                <div className="inner">
                                    <a href="https://aws.amazon.com/tw/" className="image"><img src="/images/banner/category/colorpencil_cartoon2.jpg" width="525px" height="270px" alt="bannerImg" /></a>
                                    <div className="content">
                                        <h3 className="title">
                                            <a href="https://aws.amazon.com/tw/">彩色鉛筆Q版畫</a>
                                            <span className="number">5</span>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="category-banner1">
                                <div className="inner">
                                    <a href="https://aws.amazon.com/tw/" className="image"><img src="/images/banner/category/acrylic painting2.jpg" width="525px" height="270px" alt="bannerImg" /></a>
                                    <div className="content">
                                        <h3 className="title">
                                            <a href="https://aws.amazon.com/tw/">壓克力彩繪</a>
                                            <span className="number">6</span>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="category-banner1">
                                <div className="inner">
                                    <a href="https://aws.amazon.com/tw/" className="image"><img src="/images/banner/category/fox_woodburn.jpg" width="525px" height="270px" alt="bannerImg" /></a>
                                    <div className="content">
                                        <h3 className="title">
                                            <a href="https://aws.amazon.com/tw/">電烙木版畫</a>
                                            <span className="number">2</span>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="category-banner1">
                                <div className="inner">
                                    <a href="https://aws.amazon.com/tw/" className="image"><img src="/images/banner/category/pottery_doll.jpg" width="525px" height="270px" alt="bannerImg" /></a>
                                    <div className="content">
                                        <h3 className="title">
                                            <a href="https://aws.amazon.com/tw/">陶製藝品</a>
                                            <span className="number">4</span>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="row learts-mt-0">
                <div className="col text-center">
                    <a href="https://aws.amazon.com/tw/" className="btn p-0"><i className="ti-plus"></i> load more ...</a>

                </div>
            </div>
            <div className="row g-0 justify-content-center learts-mt-50">
                <a href="https://aws.amazon.com/tw/" className="btn p-0"><i className=""></i></a>
            </div>
            <div className="section">
                <div className="container">
                    <hr className="m-0" />
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <hr className="m-0" />
                </div>
            </div>


            <div className="section">
                <div className="container">
                    <hr className="m-0" />
                </div>
            </div>

            <div className="section section-padding pt-0">
                <div className="container">
                    <div className="row row-cols-lg-2 row-cols-1 learts-mb-n50">

                        <div className="col align-self-center learts-mb-50 order-lg-2">
                            <div className="section-title3 text-center m-0" data-bg-image="/images/title/title-3.webp">
                                <h2 className="title">Follow us on Facebook</h2>
                                <p className="desc">@studio4art</p>
                            </div>
                        </div>

                        <div className="col learts-mb-50">
                            <div id="instafeed" className="instafeed instafeed-carousel instafeed-carousel2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

    return (
        <Fragment>
            {homeContent}
            <Footer version={1} />
        </Fragment>
    );
}

export default Home;