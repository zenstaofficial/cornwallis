document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var agreement = document.getElementById('agreement').checked;

    if (agreement) {
        fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: username, password: password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('アカウントが作成されました');
                window.location.href = 'https://zenstaofficial.github.io/cornwallis/ghards.html';
            } else {
                alert('アカウントの作成に失敗しました');
            }
        })
        .catch(error => console.error('エラー:', error));
    } else {
        alert('利用規約に同意してください');
    }
});
