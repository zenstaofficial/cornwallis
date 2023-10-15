const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

let accounts = []; // アカウント情報を格納する配列

app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // ユーザー名が既に存在するかどうかをチェック
    const existingUser = accounts.find(user => user.username === username);

    if (existingUser) {
        res.json({ success: false, message: 'ユーザーネームは既に使用されています' });
    } else {
        accounts.push({ username: username, password: password });
        res.json({ success: true });
    }
});

app.post('/authenticate', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // ここでアカウント情報の認証を行います
    // 例: ユーザーネームが'admin'、パスワードが'password'の場合に認証成功とする
    if (username === 'admin' && password === 'password') {
        res.json({ authenticated: true });
    } else {
        res.json({ authenticated: false });
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
