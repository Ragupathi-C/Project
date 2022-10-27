import React from "react";
import { Link } from "react-router-dom";
import navlogo from '../images/logo.png';
import { useState, useEffect } from "react";

import axios from "axios";
export function Header() {

    var userid = localStorage.getItem('user_id');

    const [uname, setUname] = useState('');
    var datastring = { userid: userid };
    var config = { headers: { 'enctype': 'mutlipart/form-data' } };

    useEffect(() => {

        axios.post('http://localhost:3002/username', datastring, config)
            .then(function (res) {
                setUname(res.data.status);
            })
            .catch(function (err) {
                console.log(err)
            })
    })

    return (
        <>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-lg-3 col-md-3 border">
                        <div className="row">
                            <div className="col-lg-6 col-md-3">
                                <h4>Nifty</h4>
                            </div>
                            <div className="col-lg-6 col-md-3">
                                <h4>Sensex</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-3">
                                <h4>data</h4>
                            </div>
                            <div className="col-lg-6 col-md-3">
                                <h4>data</h4>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-9 col-md-9">
                        <div className="row">
                            <div className="col-lg-2 col-md-2">
                                <img src={navlogo} />
                            </div>
                            <div className="col-lg-1 col-md-1">
                                <h4>Funds</h4>
                            </div>
                            <div className="col-lg-5 col-md-5 text-right">Hi <span >{uname}</span></ div>
                            <div className="col-lg-2 col-md-2">&nbsp;</div>
                            <div className="col-lg-2 col-md-2">
                                <Link to='/'><button type="button" className="btn btn-outline-info">Logout</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}