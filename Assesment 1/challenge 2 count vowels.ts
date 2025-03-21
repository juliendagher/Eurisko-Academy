const countVowels = (str: string): number => {
	const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
	let vowelCounter: number = 0;
	for (char of str) {
		if (vowels.includes(char)) vowelCounter++;
	}
	return vowelCounter;
}

console.log(countVowels("hello"));
