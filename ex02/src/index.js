const workDays = ['MON', 'TUE', 'WED', 'THU', 'FRI'];

function myWeek(days) {
  let week = [...days].concat(['SAT', 'SUN']);
  return week;
}

console.log(myWeek(workDays));
module.exports = myWeek;
