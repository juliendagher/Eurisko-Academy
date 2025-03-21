const firstNonRepeatingChar = (str: string): string | null => {
	let characterFrequencyCounter: {[char: string]: number}  = {};
	for (char of str) {
		if (characterFrequencyCounter[char]) characterFrequencyCounter[char]++;
		else characterFrequencyCounter[char] = 1;
	}

	for (element in characterFrequencyCounter) {
		if (characterFrequencyCounter[element] === 1) return element;
	}

	return null;
}

console.log(firstNonRepeatingChar("minecraftm pocket edition"));
console.log(firstNonRepeatingChar("iiaann"));
