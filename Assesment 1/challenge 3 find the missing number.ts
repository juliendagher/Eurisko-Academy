const findMissingNumber = (arr: number[]): number => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== i + 1) return i + 1;
	}
	return -1;
}

console.log(findMissingNumber([1, 2, 4, 5, 6]));
