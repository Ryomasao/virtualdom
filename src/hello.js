export default class Hello {
  sayHello() {
    console.log('sayHello')
  }
  getItemFromArray() {
    const items = [1, 2, 3]

    for(const item of items) {
      console.log(item)
    }

  }
}