

let animal = "dog";

function myAnimal() {
  return animal
}

  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below

function yourAnimal() {
  let animal = "cat";
    function myAnimal() {
      let animal = "dog";
      return animal
    }
  return animal
}

let n = 'cat';

function add2(n) {

  let two = 2
  return n + two

  // Feel free to move things around!
  
}