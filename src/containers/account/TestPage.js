import React from 'react';
// import { useForm, Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { URL } from '../../constants';
import Footer from '../../components/Footer/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";

// import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';

// const pageList = [
//     { name: '申請人填寫基本資料' },
//     { name: '新增作業' }
// ];

const TestPage = props => {
    console.log("URL:" + URL);
    // SwiperCore.use([Autoplay]);
    return (
        <>
            {/* <div><h1>hello</h1></div> */}

            <nav>
                <Link to="/about">About</Link>
            </nav>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                
            </Swiper>
            <Footer version={2} />
        </>
    );
}

export default TestPage;
