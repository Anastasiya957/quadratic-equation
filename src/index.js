module.exports = function solveEquation(equation) {
  // your implementation
  let pos1 = equation.indexOf(' * x^2');
  let A =  +equation.substring(0, pos1);
  let pos2 = equation.indexOf(' * x ');
  let B =  +(equation.substring(pos1+7, pos1+8) + equation.substring(pos1+9, pos2));
  let C =  +(equation.substring(pos2+5, pos2+6) + equation.substring(pos2+7));
  let sqrtD = Math.round( Math.sqrt(B*B - 4*A*C));
  let x1 = (- B - sqrtD)/(2*A);
  let x2 = (- B + sqrtD)/(2*A);
  if (x1 < x2){
  	console.log(x1,x2);
  	return [x1, x2];
  } else {
  	console.log(x2,x1);
  	return [x2, x1];
  }
}