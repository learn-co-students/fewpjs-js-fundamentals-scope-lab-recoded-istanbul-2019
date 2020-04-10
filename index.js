let animal = ["dog", "cat"]
const two = 2

function myAnimal() {
  return animal[0]
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal[1]
}

function add2(n) {
  return n + two
  // Feel free to move things around!
  
}