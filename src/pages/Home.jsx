import React from 'react';
import './Home.css';
import { Outlet } from "react-router-dom";
import Header from './../components/Header';
import Footer from './../components/Footer';
import Slider from './../components/Slider';

export default function Home() {

    return (
        <>
            <Header></Header>
            <div className="home">
                <Slider />
                <div className="content">
                    <Outlet />
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}