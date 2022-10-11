function sumSalary(salaries) {
 let salarieForMonth = 0;
for (let key in salaries) {
  if ( typeof (salaries[key]) === 'number' && isFinite(salaries[key]) === true) {
    salarieForMonth = salarieForMonth + salaries[key];
  }
}
return (salarieForMonth);
}