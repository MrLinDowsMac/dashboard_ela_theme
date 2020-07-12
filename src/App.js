import React from 'react';
//import logo from './logo.svg';
import './App.css';
import './styles/custom.scss';
import HeaderComponent from './components/header/header.component';
import SpinnerComponent from './components/spinner/spinner.component';
import SideBarComponent from './components/sidebar/sidebar.component';

function App() {
  return (
    <div className="App">
    
    <SpinnerComponent isBusy={false} />

      <div id="main-wrapper">
          {/* header header */}
          <HeaderComponent />
          {/* Left Sidebar */}
          <SideBarComponent />  

          {/* Page wrapper */}
          <div className="page-wrapper">
              {/* Bread Crumb */}
              <div className="row page-titles">
                <div className="col-md-5 align-self-center">
                    <h3 className="text-primary">React JS</h3>
                </div>
                <div className="col-md-7 align-self-center">
                    <ol className="breadcrumb">
                    </ol>
                </div> 
              </div>
              {/* End breadcrumb */}
              {/* Container fluid */}
              <div className="container-fluid">
                {/* Start Page Content */}
                
                {/* Here you will be use route? */}

                {/* End PAge Content */}
              </div>
              {/* <!-- End Container fluid  --> */}
              {/* <!-- footer --> */}
                {/* <FooterComponent /> */}
              {/* <!-- End footer --> */}
          </div>
          {/* <!-- End Page wrapper  --> */}
      </div>
      {/* <!-- End Wrapper --> */}
    </div>
  );
}

export default App;
