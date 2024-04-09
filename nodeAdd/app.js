
const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
// var session = require('exress-session')


//바디 파싱 허용
app.use(bodyParser.urlencoded({ extended: true }));





// const mysql = require('mysql')
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'testuser',
//     password: '3545',
//     port: 3300,
//     database: 'test'
// });

const mysql = require('mysql')
const connection = mysql.createConnection({
    host: '15.165.92.197',
    user: 'JUYEON',
    password: 'a1234',
    port: 3306,
    database: 'jomijin'
});

app.get('/join', (request, response) => {
    response.sendFile(__dirname + '/join.html');
})

app.post('/join', (request, response) => {
    let userId = request.body.userId;
    let password = request.body.password;
    let confirm_password = request.body.confirm_password;
    let email = request.body.email;
    let nickname = request.body.nickname;
    console.log(userId, password, email, nickname);

    var sql = `insert into member(user_id, pw, email, user_name) values(?,?,?,?)`

    var values = [userId, password, email, nickname];

    connection.query(sql, values, function(err, result) {
        if(err) throw err;
        console.log('1 add');
    })
    response.redirect('/login')
})

app.listen(port, () => {
    console.log(`예제 앱이 http://localhost:${port} 에서 실행 중입니다.`);
});

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/login', (request, response) => {
    response.sendFile(__dirname + '/login.html')
})