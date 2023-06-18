const instructorWithLongestName = function(instructors) {
  let n = instructors[0];
  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].name.length > n.name.length) {
      n = instructors[i];
    }
  }
  return n;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));

console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
