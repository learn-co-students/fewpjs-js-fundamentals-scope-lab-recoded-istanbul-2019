// animal = ""

// function myAnimal() {
//   return animal
// }

// function yourAnimal() {
//   // How can we make sure that this function
//   // and the above function both pass?
//   // P.S.: You can't just hard-code 'cat' below
//   return animal
// }

// function add2(n) {
//   two = 2
//   return n + two s}

//   // Feel free to move things around

describe('myAnimal()', function() {
  it('returns my animal', () => {
    expect(window.myAnimal()).toEqual('dog')
  })
})

describe('yourAnimal()', function() {
  it('returns your animal', function(){
    expect(window.yourAnimal()).toEqual('cat')
  })

  it('does not hard-code the answer', function() {
    expect(window.yourAnimal.toString()).toNotContain("return 'cat'")
  })
})

describe('add2(n)', function() {
  it('adds two to n', function() {
    const n = Math.floor(Math.random() * 1000)
    expect(window.add2(n)).toEqual(n + 2)
  })
})
})