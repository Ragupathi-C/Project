const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const multer = require('multer');
const mycon = require('mysql');
const { application, request, response } = require('express');

var app = express();
var upload = multer();

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(upload.array());
app.use(express.static('public'));

var c = mycon.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "C.Ragu2*@",
    database: "upstox"
})

c.connect(function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log("db connected");
    }
});
app.post('/SignUp', (request, response) => {
    let user_type = request.body.user_type;
    let name = request.body.name;
    let email = request.body.email;
    let phone = request.body.phone;
    let password = request.body.password;
    let pan = request.body.pan;
    let aadhar = request.body.aadhar;

    let sql = 'insert into signup(name,email,phone,status) values(?,?,?,?)';

    c.query(sql, [name, email, phone, 0], (err, res) => {
        if (err) {
            response.send(err);
        }
        else {
            response.send(res);
        }
    })

    let sql1 = 'insert into signin(username,password,email,name,pan,aadhar,role,status)values(?,?,?,?,?,?,?,?)'
    c.query(sql1, [email, password, email, name, pan, aadhar, user_type, 0], (err, res) => {
        if (err) {
            response.send(err);
        }
        else {
            response.send(res);
        }
    })

})

app.post('/SignIn', (request, response) => {
    let username = request.body.username_inp;
    let password = request.body.password;

    var sql = 'select * from signin where username=?';

    c.query(sql, [username], (err, res) => {
        if (err) {
            let s = { "status": "username_error" };
            response.send(s);

        }

        else if (res.length > 0) {
            let username1 = res[0].username;
            let password1 = res[0].password;
            let id = res[0].id;
            let role = res[0].role;
            let uname = res[0].name;

            if (username1 === username && password1 === password) {
                let s = { "status": "login_success", "id": id, "role": role, "name": uname };
                response.send(s);
            }
            else {
                let s = { "status": "invalid_login" };
                response.send(s);
            }
        }
        else {
            let s = { "status": "invalid_login" }
        }
    })
})

app.post('/username', (request, response) => {

    let userid = request.body.userid;
    var sql = 'select * from signup where id=?';

    c.query(sql, [userid], (err, res) => {
        if (err) {
            let s = { "status": "error" };
            response.send(s);
        }
        else {
            var name1 = res[0].name;
            var s = { "status": name1 };
            response.send(s);
        }
    })
})

app.listen(3002);
