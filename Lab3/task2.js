function task21() {
	let a = [new Date()];
	console.log(a);
}

function task22() {
	let a = [new Date()];

	a.push(new Date(2018, 12, 8));
	a[1].setHours(21, 0, 0);

	printArray(a);
}

function task23() {
	let a = [new Date(), new Date(2018, 12, 8, 21, 0, 0)];
	
	let b = a.map((element) => {
		let dateCopy = new Date(element.getTime()); 
		dateCopy.setMonth(dateCopy.getMonth() + 1, 0);
		return [dateCopy.getDate(), element.getDay()];
	});
	
	printArray(a);
	printArray(b);
}

function task24() {
	let a = [new Date(), new Date(2018, 12, 8, 21, 0, 0)];
	
	const getDayOfWeek = (iDay) => {
		let daysOfWeek = ["неделя", "понеделник", "вторник", "сряда", "четвъртък", "петък", "събота"];

		if (iDay < 0 || iDay > 6) {
			return "Невалиден ден от седмицата!";
		}

		return daysOfWeek[iDay];
	};
	
	const pad2Digits = (iVal) => {
		return iVal < 10 ? "0" + iVal : new String(iVal); 
	};
	
	let b = a.map((oDate) => {
		let oDateCopy = new Date(oDate.getTime()),
			sDate,
			sHour,
			sDayOfWeek,
			sCountOfDays;

		sDate = "Дата: " + pad2Digits(oDate.getDate()) + "." + pad2Digits((oDate.getMonth() + 1)) + "." + oDate.getFullYear();
		
		sHour = "час: " + pad2Digits(oDate.getHours()) + ":" + pad2Digits(oDate.getMinutes()) + ":" + pad2Digits(oDate.getSeconds());
		
		sDayOfWeek = getDayOfWeek(oDate.getDay());
		
		oDateCopy.setMonth(oDateCopy.getMonth() + 1, 0);
		
		sCountOfDays =  oDateCopy.getDate() + " дни";
		
		return sDate + ", " + sHour + ", " + sDayOfWeek + ", " + sCountOfDays;
	});
	
	printArray(b);
}