// import logo from './logo.svg';
import { Route, Routes, Link } from 'react-router-dom';
// import React, { lazy, Suspense } from 'react';
import React, { Suspense } from 'react';
import Footer from './components/Footer/Footer';

import TestPage from './containers/account/TestPage';
import LoginRegister from './components/Login/loginRegister';

// import './main';

import Home from './containers/Home';
import Layout from './containers/Layout';
// import LoginFooter from './components/test';

// const TestPage = lazy(() => import('./containers/account/TestPage'));

const App = props => {
  // const URL = process.env.REACT_APP_URL;
  // console.log("URL:"+URL);

  //   main.js 依據 data-bg-image載入背景(不確定這邊怎麼做，直接寫入css-style)

  //   $('[data-bg-image]').each(function () {
  //     var $this = $(this),
  //         $image = $this.data('bg-image');
  //     $this.css('background-image', 'url(' + $image + ')');
  // });
  return (
    <div className="App">
      <Suspense fallback={<div id="mask" className="mask"><div className="processing"><h1>處理中，請稍後...</h1></div></div>}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/loginRegister" element={<LoginRegister/>} />
            <Route path="/about" element={<About />} />
            <Route path="/lalalu" element={<TestPage />} />
          </Routes>
        </Layout>
      </Suspense>
    </div>
  );
}

// function Home() {
//   return (
//     <>
//       <main>
//         <h2>Welcome to the homepage!</h2>
//         <p>You can do this, I believe in you.</p>
//       </main>
//       <nav>
//         <Link to="/about">About</Link>
//       </nav>
//     </>
//   );
// }

function About() {
  return (
    <>
      <h2>Who are we?</h2>
      <p style={{ background: "red" }}>
        That feels like an existential question, don't you
        think?
      </p>

      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Footer version={2}/>
    </>
  );
}
export default App;
