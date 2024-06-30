export const selectionSort = <T>(array: T[]) => {
	if (!Array.isArray(array)) return new Error('Pass array as argument');
	if (array.length === 0) return [];

	const arrayClone = [...array];
	let iterationsCount = 0;

	for (let i = 0; i < arrayClone.length; i++) {
		let minIndex = i;

		for (let j = i + 1; j < arrayClone.length; j++) {
			if (arrayClone[j] < arrayClone[minIndex]) minIndex = j;

			iterationsCount++;
		}

		const temp = arrayClone[i];
		arrayClone[i] = arrayClone[minIndex];
		arrayClone[minIndex] = temp;
	}

	return {
		result: arrayClone,
		arrayLength: arrayClone.length,
		iterationsCount
	};
};
