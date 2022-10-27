const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const database = require('mysql');
const multer = require('multer');


var app = express();
var upload = multer();

app.use(cors());
app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(upload.array());

var con = database.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "C.Ragu2*@",
    database: "upstox"
});

con.connect(function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("Datbase Connected");
    }
});

app.post('/SignUp', (request, response) => {
    let signup_type = request.body.signup_type;
    let name = request.body.name;
    let email = request.body.email;
    let phone = request.body.phone;
    let password = request.body.password;
    let address = request.body.address



    let sql = 'insert into signup(name,email,phone,address,status)values(?,?,?,?,?)';
    let sql1 = 'insert into signin (username,password,name,email,phone,role,status)values(?,?,?,?,?,?,?)';
    con.query(sql, [name, email, phone, address, 0], (err, res) => {
        if (err) {
            let s = { "status": "Signup_Error" };
            response.send(s);
        }
        else {
            con.query(sql1, [username, password, name, email, phone, signup_type, 0], (err1, res) => {
                if (err1) {
                    let s = { "status": "Signin_Error" };
                    response.send(s);
                }
                else {
                    let s = { "status": "Signup_Successfully" };
                    response.send(s);
                }
            })
        }
    });
});

app.post('/SignIn', (request, response) => {
    let username = request.body.username;
    let sql = 'select * from signin where username=?';

    con.query = (sql, [username], (err, res) => {
        if (err) {
            let s = { "status": "username_error" };
            response.send(s);
        }
        else if (res.length > 0) {
            let username1 = res[0].username;
            let password1 = res[0].password;
            let id = res[0].id;
            let role = res[0].role;

            if (username1 === username && password1 === password) {
                let s = { "status": "Login_Successfully", "id": id, "role": role };
                response.send(s);
            }
            else {
                let s = { "status": "Invalid_Login" };
                response.send(s);
            }
        }
        else {
            let s = { "status": "Invalid_Login" };
            response.send(s);
        }
    })
})

app.listen(3004);

