const animal = "dog"

function myAnimal() {
  // const my = "dog"
  return animal;
}
myAnimal();


function yourAnimal() {
  const animal = "cat"
  // const your = "cat"
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal;
}
yourAnimal();

function add2(n) {
  return n + 2

  // Feel free to move things around!
}
