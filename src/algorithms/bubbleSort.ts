export const bubbleSort = <T>(array: T[]) => {
	if (!Array.isArray(array)) return new Error('Pass array as argument');
	if (array.length === 0) return [];

	let iterationsCount = 0;

	const arrayClone = [...array];

	for (let i = 0; i < arrayClone.length; i++) {
		for (let j = 0; j < arrayClone.length; j++) {
			if (arrayClone[j] > arrayClone[j + 1]) {
				const temp = arrayClone[j];
				arrayClone[j] = arrayClone[j + 1];
				arrayClone[j + 1] = temp;
			}

			iterationsCount++;
		}
	}

	return {
		result: arrayClone,
		arrayLength: arrayClone.length,
		iterationsCount
	};
};
