function characterNumber() {
	//подсчитать сумму цифр в дате рождения
	var birthday = + document.getElementById('day').value;//берем цифры с дня рождения
	var daysum = sum2digit(birthday);//сумма цифр в дне рождения
	var birthmonth = + document.getElementById('month').value;//берем цифры с месяца рождения
	var monthsum = sum2digit(birthmonth);//сумма цифр в месяце рождения
	var birthyear = + document.getElementById('year').value;//берем цивры в годе рождения
	var end2 = birthyear % 100;//берем две последние цифры в годе рождения
	var begin2 = (birthyear - end2) / 100;//берем две первые цифры в годе рождения
	var yearsum = sum2digit(begin2) + sum2digit(end2);//сумма всех цифр в годе рождения
	document.getElementById('resout').innerHTML = `Характеристическое число равно ${sum2digit(daysum + monthsum + yearsum)}`;
}
//________________________**************************______________________________\\
function sum2digit(param) {
	var second = param % 10;//вторая цифра в дне рождения
	var first = (param - second) / 10;//первая цифра в дне рождения
	var sum = first + second;
	return sum
}