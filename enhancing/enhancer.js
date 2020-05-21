module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement < 20 && item.enhancement > 0) {
    item.enhancement++
  }
  return { ...item };
}

function fail(item) {
  if (item.enhancment < 15) {
    item.durability = item.durability - 5

  } else {
    if (item.enhancement >= 15) {
      item.durability = item.durability - 10
    } else {
      if (item.enhancement > 16) {
        item.enhancement = item.enhancement - 1
      }
      return { ...item };
    }


function repair(item) {
      return { ...item, durability: 100 };
    }

    // function get(item) {
    //   return { ...item };
