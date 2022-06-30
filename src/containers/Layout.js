// import React, { Fragment, useContext } from 'react';

import React, { Fragment } from 'react';

import TopNav from '../components/Navigation/TopNav';
// import Footer from '../components/Footer/Footer';
// import SideNav from '../components/Navigation/SideNav';
// import Footer from '../components/Footer/Footer';
// import ActiveContext from '../context/ActiveContext';

const Layout = props => {
    // const [active] = useContext(ActiveContext);

    return (
    <Fragment>
        {/* <div id="mask" className={active ? 'mask' : 'mask-none'}>
            <div className='processing'>
                <h1>處理中 ...</h1>
            </div>
        </div> */}
        <TopNav showOptions={true}/>
        
        {/* <div className="container-fluid"> container-fluid 左右會padding */}
        <div>
            <div className="container-box">

                <div>
                    {/* menu_a1 and menu_a2 are SideNav togglers. 本來就有的註解*/} 

                    {/* <div className="by-component"> */}
                    <div>
                        {/* <h3 style={{color:"blue"}}>props children</h3> */}
                        {props.children}
                    </div>
                    
                </div>
            </div>            
            {/* <Footer /> */}
        </div>
        {/* <Footer version={2}/> */}
    </Fragment>
);}

export default Layout;