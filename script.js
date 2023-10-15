document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // ここでサーバーサイドにリクエストを送信し、認証を行います
    node server.js

    fetch('/authenticate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username, password: password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.authenticated) {
            window.location.href = 'https://zenstaofficial.github.io/cornwallis/ghards.html'; // 認証成功時のリダイレクト先
        } else {
            alert('認証エラー');
        }
    })
    .catch(error => console.error('エラー:', error));
});
