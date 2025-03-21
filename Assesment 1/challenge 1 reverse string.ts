const reverseString = (str: string): string => {
	let reverse: string = "";
	for (char of str) {
		reverse = char + reverse;
	}
	return reverse;
}

console.log(reverseString("test"));
