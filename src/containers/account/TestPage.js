import React, { Fragment } from 'react';
// import { useForm, Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { URL } from '../../constants';
import Footer from '../../components/Footer/Footer';
// import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';

// const pageList = [
//     { name: '申請人填寫基本資料' },
//     { name: '新增作業' }
// ];

const TestPage = props => {
    console.log("URL:"+URL);
    return (
        <>
            <div><h1>hello</h1></div>
            
            <nav>
                <Link to="/about">About</Link>
            </nav>
            <Footer version={2}/>
        </>
    );
}

export default TestPage;
