// object1 = {
// 		a: 55
// 		b: 75
// 		c: {
// 			d: 5
// 		}
//

const deepEqual = (obj1: any, obj2: any): boolean => {
	const keysObject1 = Object.keys(obj1);
	const keysObject2 = Object.keys(obj2);

	if (keysObject1.length !== keysObject2.length) return false;

	for (key of keysObject1) {
		const valueObject1 = obj1[key];
		const valueObject2 = obj2[key];

		if (isObject(valueObject1) && isObject(valueObject2)) {
			if (!deepEqual(valueObject1, valueObject2)) return false;
		} else {
			if (valueObject1 !== valueObject2) return false;
		}
	}

	return true;
}

const isObject = (obj:any): boolean => (obj !== null && typeof obj === "object")

console.log(deepEqual({a: 5, b: 4, c: {d: 4}}, {a: 5, b: 4, c: {d: 5}}));
console.log(deepEqual({a: 5, b: 4, c: {d: 4}}, {a: 5, b: 4, c: {d: 4}}));
console.log(deepEqual({a: 5, b: 4, c: {d: 4}}, {a: 5, b: 4, c: {e: 4}}));

