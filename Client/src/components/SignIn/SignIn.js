import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignIn.css';
import logo1 from '../images/logo.png'
import bannerImage from '../images/banner-image.png'
import { Link } from "react-router-dom";
import axios from "axios";
import ratantata from '../images/ratan-tata.png';
import tigerglobal from '../images/tiger_global.png';
import stocks from '../images/grow-stock.png';
import ipo from '../images/grow-IPOs.png';
import mf from '../images/grow-mutual-fund.png';
import fando from '../images/grow-future.png';
import tree from '../images/pricing-tree.png';


export function SignIn() {

    const signvalid = async (event) => {
        event.preventDefault();

        var datastring = new FormData(event.target);
        var config = { headers: { 'enctype': 'multipart/form-data' } }

        var username = document.getElementById('username_inp').value;
        var password = document.getElementById('password').value;

        if (username === '' || username === null) {
            alert("User Name cannot be empty");
        }
        else if (password === '' || password === null) {
            alert("Password cannot be empty")
        }
        else {
            await axios.post('http://localhost:3002/SignIn', datastring, config)
                .then(function (res) {
                    if (res.data.status === "username_error") {
                        alert("User Name error")
                        window.location.reload();
                    }
                    else if (res.data.status === "invalid_login") {
                        alert("Invalid Login")
                    }
                    else if (res.data.status === "login_success") {
                        let id = res.data.id;
                        if (res.data.role === "ADMIN") {
                            alert("Admin Logined");
                            localStorage.setItem('user_id', id);
                            window.location.href = "/UdashBoard"
                        }
                        else if (res.data.role === "end_user") {
                            alert("Client Logined");
                            localStorage.setItem('user_id', id);
                            window.location.href = "/UdashBoard"
                        }
                        else {
                            alert("Please enter details again");
                        }
                    }

                })
                .catch(function (err) {
                    alert(err);



                })
        }
    }


    return (
        <>
            <Link to="/"></Link>

            <div className="container-fluid">

                <div className="row">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-dark bg-light">
                            <a className="navbar-brand">
                                <img src={logo1} />

                            </a>
                            <button type="onclick" name="submit_indexbtn" className="btn ml-auto btn-outline-info btn-sm">Sign Up</button>

                        </nav>
                    </div>
                </div>

                <div className="row mt-5">

                    <div className="col-lg-2">&nbsp;</div>
                    <div className="col-lg-4">
                        <h1>One account .Many Options</h1>
                        <h4>Open a Demat and Trading account</h4>
                        <ul>
                            <li>Zero commission* on Mutual Funds and IPO</li>
                            <li>₹20* per order on Equity, F&O, Commodity and Currency</li>
                        </ul>
                        <ul>
                            <li>
                                <a href="#" className="font-italic">*TERMS & CONDITIONS</a>
                            </li>
                        </ul>
                        <form onSubmit={signvalid}>
                            <div className="table-responsive">
                                <table className="table ">
                                    <tbody>
                                        <tr>
                                            <td >
                                                <input type="text" name="username_inp" id="username_inp" className="form-control" placeholder="Enter your Username" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td >
                                                <input type="password" name="password" id="password" className="form-control" placeholder="Enter Password" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <button type="submit" id="signin_btn" name="signin_btn" className="btn btn-outline-info btn-block">Sign In</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Link to="/SignUp"><button type="submit" id="signup_btn" name="signup_btn" className="btn btn-outline-info btn-block">Sign Up</button></Link>
                                            </td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-4">
                        <img src={bannerImage} className="img-fluid mt-4" />
                    </div>
                    <div className="col-lg-2">&nbsp;</div>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-3 ">&nbsp;</div>
                    <div className="col-lg-3 text-center p-3 m-2 bg-info rounded">
                        <h1>1 Cr+</h1>
                        <h6 className="mt-3">Happy Investors</h6>
                    </div>
                    <div className="col-lg-3 text-center p-3 m-2 bg-info rounded ">
                        <h1>4.5 ⭐</h1>
                        <h6 className="mt-3">Play Store Rating</h6>
                    </div>
                </div>
                <div className="row mt-5 text-center">
                    <div className="col-lg-2">&nbsp;</div>
                    <div className="col-lg-8 ">
                        <h2>Backed by the best</h2>
                        <div className="col-lg-12 mt-4 ">
                            <img src={ratantata} className="m-2" />
                            <img src={tigerglobal} className="m-2" />
                        </div>
                        <div className="col-lg-12 d-flex mt-4">
                            <div className="col-lg-2">&nbsp;</div>
                            <div className="col-lg-8">
                                <h5 className="font-weight-normal">Upstox is backed by marquee investors like Mr. Ratan Tata & Tiger Global Management</h5>
                            </div>
                            <div className="col-lg-2">&nbsp;</div>
                        </div>
                    </div>
                    <div className="col-lg-2">&nbsp;</div>
                    <div className="col-lg-12 d-flex">
                        <div className="col-lg-2">&nbsp;</div>
                        <div className="col-lg-8">
                            <p className="mt-5 text-danger">ASSET CLASSES</p>
                            <h1>Ways to grow your wealth</h1>
                        </div>
                        <div className="col-lg-2">&nbsp;</div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="card col-lg-3 col-md-6">
                        <img className="card-img" src={stocks} />
                        <div className="card-body">
                            <div className="card-title mt-5">Stocks</div>
                            <div className="card-text">
                                <ul>
                                    <li>Discover stocks with smart lists and smart filters</li>
                                    <li>Access key company information</li>
                                    <li>Buy and sell stocks in a single click</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card col-lg-3 col-md-6">
                        <img className="card-img img-fluid" src={ipo} />
                        <div className="card-body">
                            <div className="card-title mt-1">IPOs</div>
                            <div className="card-text">
                                <ul>
                                    <li>24/7 IPO applications</li>
                                    <li>Apply and pre-apply via WhatsApp</li>
                                    <li>Zero commission investing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card col-lg-3 col-md-6">
                        <img className="card-img mt-5" src={fando} />
                        <div className="card-body">
                            <div className="card-title mt-4">Futures & Options</div>
                            <div className="card-text">
                                <ul>
                                    <li>Pay just up to ₹20* per order</li>
                                    <li>Switch between Trading view & Charts IQ</li>
                                    <li>Place GTT orders till contract expiry</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="card col-lg-3 col-md-6">
                        <img className="card-img" src={mf} />
                        <div className="card-body">
                            <div className="card-title mt-3">Mutual Funds</div>
                            <div className="card-text">
                                <ul>
                                    <li>Zero commission investing</li>
                                    <li>SIP investments starting at ₹100/month</li>
                                    <li>Discover tax-saving funds easily</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 bg-info">
                    <div className="col-lg-1">&nbsp;</div>
                    <div className="col-lg-10">
                        <div className="row">
                            <div className="col-lg-9">
                                <h1 className="">
                                    Flat fees, no hidden charges.
                                </h1>
                            </div>
                            <div className="col-lg-3 ">
                                {/* <img src={tree} className="img-fluid " /> */}
                            </div>
                        </div>
                        {/* <img src={tree} /> */}
                    </div>
                    <div className="col-lg-1">&nbsp;</div>
                </div>
            </div>
        </>
    )
}