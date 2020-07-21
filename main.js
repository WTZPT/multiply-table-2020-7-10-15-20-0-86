function createMultiplyTable(start, end) {
    if(isValid(start,end)) {
      return generateAllLines(start,end);
    }
  return null;
}

function isValid(start,end){
  if(checkStartAndEndNumber(start,end) && checkStartAndEndNumberRange(start,end)){
      return true;
  }
  return false;
}

function checkStartAndEndNumber(start,end) {
  return start < end;
}

function checkStartAndEndNumberRange(start,end) {
  return (checkNumberRange(start)&&checkNumberRange(end));
}

function checkNumberRange(number) {
  return  (  1 < number && number < 1000);
}

function generateAllLines(start,end) {
  let i;
  let ans = "";
  for(i = start; i <= end; i++) {
      ans += generateLine(start,i);
      if(i != end) {
        ans += "\n";
      }
  }
  return ans;
}

function generateLine(lineStart,lineEnd) {
  let i;
  let lineAns = "";  
  for(i = lineStart ; i <= lineEnd; i++) {
      lineAns += generateExpression(i,lineEnd)  ;
      if(i != lineEnd) {
        lineAns += "\t";
      }
  }
  return lineAns;
}

function generateExpression(multiplier,multicand) {
    let expression;
    expression = multiplier + "*" + multicand + "=" + (multiplier*multicand);
    return expression;
}

module.exports = {
  createMultiplyTable,
};
