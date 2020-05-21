const enhancer = require('./enhancer.js');
// test away!

test("suceed", () => {
  expect(enhancer.suceed({enhancement: 17})).toEqual({enhancement: 18})
})

test("fail", () => {

})

test("repair", () => {
  expect(enhancer.repair({durability:50})).toEqual({durability:100})
})
