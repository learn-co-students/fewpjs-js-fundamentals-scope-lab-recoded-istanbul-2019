let animal = "dog"
let yourAn = "cat"

function myAnimal() {
  return animal
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return yourAn
}

function add2(n) {
  let two = 2
  return n + two
}