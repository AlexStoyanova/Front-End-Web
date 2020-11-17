function task11() {
	let a = [10,5,13,18,51];
	printArray(a);
	for(let i = 0; i < a.length; i++) {
		console.log("a[" + i + "]= " + a[i]);
	}
}

function task12() {
	let a = [10,5,13,18,51];
	let b = a.map((element)=> {
		return element * 2;
	});
	printArray(b);
}

function task13() {
	let a = [10,5,13,18,51];
	let b = a.filter((element) => {
		return element%2 === 0;
	});
	printArray(b);
}

function task14() {
	let a = [10, 5, 13, 18, 51];
	let b = [20, 10, 26, 36, 102];
	
	function oneElementLessThan10(arr) {
		return arr.some((element) => {
			return element < 10;
		});
	}
	
	console.log("Има ли елемент от масив А, който е < 10? " + oneElementLessThan10(a));
	console.log("Има ли елемент от масив B, който е < 10? " + oneElementLessThan10(b));
}

function task15() {
	let a = [10, 5, 13, 18, 51];
	let b = a.filter((element) => {
		return element%3 === 0;
	})
	
	printArray(b);
}

function task16() {
	let a = [10, 5, 13, 18, 51];
	const reducer = (accumulator, currentValue) => accumulator + currentValue;
	console.log(a.reduce(reducer));
}

function task17() {
	let a = [10, 5, 13, 18, 51];
	let b = a.slice(-2);
	printArray(b);
}