export const quickSort = <T>(array: T[]): T[] => {
	if (array.length <= 1) return array;

	let pivotIndex = Math.floor(array.length / 2);
	const pivotElement = array[pivotIndex];

	const left = [];
	const right = [];

	for (let i = 0; i < array.length; i++) {
		const element = array[i];

		if (i === pivotIndex) continue;

		if (element < pivotElement) {
			left.push(element);
		}

		if (element > pivotElement) {
			right.push(element);
		}
	}

	return [...quickSort(left), pivotElement, ...quickSort(right)];
};
