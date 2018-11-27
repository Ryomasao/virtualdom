
// Eメールアドレスの形式チェック
export function isEmail(value) {
  if(value.match( /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
    return true
  }
  return false
}

// 空っぽかどうか
export function isEmpty(value) {
  return value === ''
}