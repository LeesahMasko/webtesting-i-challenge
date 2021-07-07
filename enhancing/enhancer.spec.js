const enhancer = require('./enhancer.js');
// test away!

// const testItem1= {
//   name: 'store bought cookies',
//   durability: 50,
//   enhancement: 15
// }
// const testItem2= {
//   name: 'homemade cookies',
//   durability: 75,
//   enhancement: 15
// }
// const testItem3= {
//   name: 'hot homemade cookies with icecream',
//   durability: 85,
//   enhancement: 19
// }

describe('succeed', () => {
  test("suceed", () => {
    expect(enhancer.succeed({ enhancement: 5 })).toEqual({enhancement: 6})
  })
})



test("repair", () => {
  expect(enhancer.repair({durability:50})).toEqual({durability:100})
})



describe("fail", () => {
  test("durability should decrease by 5 when enhancement is less than 15", () => {
    expect(enhancer.fail({enhancement:14, durability:45})).toEqual({enhancement: 14, durability:40})
    expect(enhancer.fail({enhancement:14, durability:0})).toEqual({enhancement: 14, durability:0})
  })

  test("durability should decrease by 10 when enhancement is 15 or more", () => {
    expect(enhancer.fail({enhancement:15, durability:20})).toEqual({enhancement:15, durability:10})
  })


  test("enhancement should decrease by 1 when the enhancement level is greater than 16", () => {
    expect(enhancer.fail({enhancement:17, durability:20})).toEqual({enhancement:16, durability:10})



  })
})
