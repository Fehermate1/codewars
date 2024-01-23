function getAverage(marks)
{
  var grades = 0;
  for (var i = 0; i < marks.length; i++) {
    grades += marks[i];
  }
  return Math.floor(grades / marks.length);
};