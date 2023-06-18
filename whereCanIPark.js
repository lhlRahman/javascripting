const whereCanIPark = function(spots, vehicle) {
  for (let i = 0; i < spots.length; i++) {
    for (let j = 0; j < spots[i].length; j++) {
      if (
        (vehicle === "motorcycle" && (spots[i][j] === "R" || spots[i][j] === "S" || spots[i][j] === "M")) ||
        (vehicle === "small" && (spots[i][j] === "R" || spots[i][j] === "S")) ||
        (vehicle === "regular" && spots[i][j] === "R")
      ) {
        return [j, i];
      }
    }
  }
  return false;
};

console.log(
  whereCanIPark(
    [
      ['s', 's', 's', 'S', 'R', 'M'],
      ['s', 'M', 's', 'S', 'r', 'M'],
      ['s', 'M', 's', 'S', 'r', 'm'],
      ['S', 'r', 's', 'm', 'r', 'M'],
      ['S', 'r', 's', 'm', 'r', 'M'],
      ['S', 'r', 'S', 'M', 'M', 'S']
    ],
    'regular'
  )
);

console.log(
  whereCanIPark(
    [
      ['M', 'M', 'M', 'M'],
      ['M', 's', 'M', 'M'],
      ['M', 'M', 'M', 'M'],
      ['M', 'M', 'r', 'M']
    ],
    'small'
  )
);

console.log(
  whereCanIPark(
    [
      ['s', 's', 's', 's', 's', 's'],
      ['s', 'm', 's', 'S', 'r', 's'],
      ['s', 'm', 's', 'S', 'r', 's'],
      ['S', 'r', 's', 'm', 'r', 's'],
      ['S', 'r', 's', 'm', 'R', 's'],
      ['S', 'r', 'S', 'M', 'm', 'S']
    ],
    'motorcycle'
  )
);
