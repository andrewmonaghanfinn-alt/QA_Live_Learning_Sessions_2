function topFn(x, y, which) {
  let result;

  switch (which) {
    case 1:
      result = x * y;
      break;
    case 2:
      result = x / y;
      break;
    case 3:
      result = x + y;
      break;
    case 4:
      result = x - y;
      break;
    default:
      result = "error: please select an operand (1, 2, 3, 4)";
  }

  //console.log(result);
  return result;
}

topFn(1238, 42, 2);

function findInt(topFn) {
  let x = 50;
  let result = topFn(1238, x, 2);

  while (x > 1) {
    if (Number.isInteger(result)) {
      console.log(x);
      break;
    }
    x--;
    result = topFn(1238, x, 2);
  }
  if (x < 2) console.log("dang");
}

findInt(topFn);
