import React, { useState, useEffect } from "react";
import axios from "axios";

export function WatchHead() {

    // var x = document.getElementById('watch_inp').value;

    // const [watch, setWatch] = useState('');
    // const datastring = { headers: { 'enctype': 'multipart/form-data' } }
    // const config = { x: x };
    // useEffect(() => {
    //     axios.post('http://localhost:3002/watchhead', datastring, config)
    //         .then(function (res) {
    //             console.log(res.data.value)
    //         })
    //         .catch(function (err) {
    //             alert(err)
    //         })
    // })



    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <form>
                            <div className="row">

                                <div className="col-lg-8 col-md-8">
                                    <input type="text" id="watch_inp" name="watch_inp" placeholder="Add Stock" className="form-control" />
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <button type="button" className="btn btn-info">Add</button>
                                </div>

                            </div>
                            <div className="row">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead className="text-center">
                                            <tr>
                                                <th>Stocks</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Empty</td>
                                            </tr>
                                            <tr>
                                                <td>Empty</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}