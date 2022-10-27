import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import logo from '../images/stocklogo.jpg';

export function SignUp() {

    const signnew = async (event) => {
        event.preventDefault();
        var datastring = new FormData(event.target);

        const config = {
            headers: { 'enctype': 'multipart/form-data' }
        }

        axios.post('http://localhost:3002/SignUp', datastring, config)
            .then(function (res) {
                console.log(res);
            })
            .catch(function (err) {
                console.log(err);
            })

    }


    return (
        <>
            <Link to="/SignUp"></Link>
            <div className="container-fluid">
                <div className="row">

                    <div className="col-lg-3">&nbsp;</div>
                    <div className="col-lg-6">
                        <div className="table-responsive">
                            <form onSubmit={signnew}>
                                <table className="table">
                                    <thead className="text-center">
                                        <tr>
                                            <td colSpan={2}>Sign Up</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td >Select type of User</td>
                                            <td>
                                                <select id="user_type" name="user_type" className="form-control" required>
                                                    <option value="">--Choose--</option>
                                                    <option value="admin" className="d-none" >Admin</option>
                                                    <option value="end_user">End User</option>

                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label>Name</label>
                                            </td>
                                            <td>
                                                <input type="text" id="name" name="name" placeholder="Name" className="form-control" required />
                                            </td>
                                        </tr>
                                        {/* <tr>
                                            <td>
                                                <label>User Name</label>
                                            </td>
                                            <td>
                                                <input type="text" id="user_name" name="user_name" placeholder="User Name" className="form-control" />
                                            </td>
                                        </tr> */}
                                        <tr>
                                            <td>
                                                <label>Email</label>
                                            </td>
                                            <td>
                                                <input type="email" id="email" name="email" placeholder="Email" className="form-control" required />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label>Phone</label>
                                            </td>
                                            <td>
                                                <input type="number" id="phone" name="phone" placeholder="Phone" className="form-control" required />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label>Password</label>
                                            </td>
                                            <td>
                                                <input type="password" id="password" name="password" placeholder="Password" className="form-control" required />
                                            </td>
                                        </tr>


                                        <tr>
                                            <td>
                                                <label>Pan Number</label>
                                            </td>
                                            <td>
                                                <input type="text" id="pan" name="pan" placeholder="Pan Number" className="form-control" required />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label>Aadhar Number</label>
                                            </td>
                                            <td>
                                                <input type="text" id="aadhar" name="aadhar" placeholder="Aadhar Number" className="form-control" required />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>
                                                <button type="submit" id="submit_btn" name="submit_btn" className="btn btn-outline-info btn-block" >Submit</button>
                                            </td>
                                        </tr>
                                    </tbody>

                                </table>
                            </form>

                        </div>
                    </div>
                    <div className="col-lg-3">&nbsp;</div>

                </div>

            </div>


        </>
    )
}