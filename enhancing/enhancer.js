module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  let enhancement = item.enhancement;
  if (item.enhancement < 20 && item.enhancement > 0) {
    enhancement++
  }
  return { ...item, enhancement };
}

function fail(item) {
  let enhancement = item.enhancement;
  let durability = item.durability;

  if (item.enhancement >= 15) {
    durability -= 10;
    if (item.enhancement > 16) {
      enhancement--;
    }
  } else  {
    durability -=5
  }
  if (durability < 0) {
    durability = 0;
  }
  return {
    ...item,
    durability,
    enhancement,
  }
}

// function fail(item) {
//   let durability = item.durability
//   if (item.enhancment < 15) {
//     durability = durability - 5

//   } else {
//     if (item.enhancement >= 15) {
//       item.durability = item.durability - 10
//     } else {
//       if (item.enhancement > 16) {
//         item.enhancement = item.enhancement - 1
//       }

//     }
//   }
//   return { ...item, durability:durability };
// }


function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}

    // function get(item) {
    //   return { ...item };
