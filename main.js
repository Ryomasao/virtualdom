//formのsubmitボタンを押したときのイベント
document.getElementById('form').addEventListener('submit', function(event) {
  //
  var userName = document.getElementById('user-name').value
  var email = document.getElementById('email').value

  if(isEmpty(userName)) {
    document.getElementById('user-name-error').innerHTML = 'ユーザーネームを入力してください'
    event.preventDefault()
  }

  if(isEmpty(email)) {
    document.getElementById('email-error').innerHTML = 'Eメールアドレスを入力してください'
    event.preventDefault()
  }

  if(!isEmail(email)) {
    document.getElementById('email-error').innerHTML = 'Eメールアドレスの形式がおかしいです'
    event.preventDefault()
  }

})

// Eメールアドレスの形式チェック
function isEmail(value) {
  if(value.match( /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
    return true
  }
  return false
}

// 空っぽかどうか
function isEmpty(value) {
  return value === ''
}