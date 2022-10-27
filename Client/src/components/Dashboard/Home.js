import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import axios from "axios";
import { Header } from "./Header";
import { WatchHead } from "./WatchHead";
import { ChartContainer } from "./ChartContainer";
import '../../App.css';
import { Holding } from "./Holdings";

export default function Home() {
    return (
        <>
            <Link to='/UdashBoard'></Link>
            <div className="row">
                <Header />
            </div>
            <div className="row">
                <div className="col-lg-3 ">
                    <WatchHead />
                </div>
                <div className="col-lg-7  Chart-container border">
                    <ChartContainer />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8">&nbsp;</div>
                <div className="col-lg-2"><Holding /></div>
                <div className="col-lg-2">&nbsp;</div>

            </div>
        </>
    )
}