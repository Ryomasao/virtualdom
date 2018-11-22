//formのsubmitボタンを押したときのイベント
document.getElementById('form').addEventListener('submit', function(event) {
  //
  var userName = document.getElementById('user-name').value
  var email = document.getElementById('email').value

  //ユーザー名がからっぽなら、エラーメッセージを出す
  if(userName === '') {
    document.getElementById('user-name-error').innerHTML = 'ユーザーネームを入力してください'
  }

  //Eメールが空っぽ
  if(email === '') {
    document.getElementById('email-error').innerHTML = 'Eメールアドレスを入力してください'
  }

  //Eメールの形式が不正
  if(!email.match( /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
    document.getElementById('email-error').innerHTML = 'Eメールアドレスの形式がおかしいです'
  }
})