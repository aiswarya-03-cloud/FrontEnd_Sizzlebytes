import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { UserHeader } from '../User/UserHeader';
import PrimarySearchAppBar from './AdminHeader';


const AdminLayout = ({ setShowLogin }) => {

//    const isUserAuth = false;

    return (
        <>
   
    
       
        {/* {isUserAuth ? <PrimarySearchAppBar /> : <Header />} */}
            {/* <Header setShowLogin={setShowLogin} />  */}
            {/* <UserHeader /> */}
            {/* <Navbar /> */}
            <PrimarySearchAppBar />
          
            <div className ="min-h-96">
              
            <Outlet /> 

            </div>
           
            <Footer />
        </>
    );
};

export default AdminLayout;