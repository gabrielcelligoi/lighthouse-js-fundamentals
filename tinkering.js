function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}


function buildTriangle(high) {
  let triangle = "";
  for (var i = 1; i <= high; i++) {
    triangle += makeLine(i)
  }
  return triangle
}

console.log(buildTriangle(5))