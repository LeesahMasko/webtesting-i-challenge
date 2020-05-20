const enhancer = require('./enhancer.js');
// test away!


test("repair", () => {
  expect(enhancer.repair({durability:50})).toEqual({durability:100})
})
