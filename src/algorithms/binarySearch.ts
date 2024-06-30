export const binarySearch = (array: number[], item: number) => {
	if (!Array.isArray(array)) return null;
	if (array.length === 0) return null;

	let startIndex = 0;
	let endIndex = array.length - 1;

	while (startIndex <= endIndex) {
		const middleIndex = Math.floor((startIndex + endIndex) / 2);
		const middleItem = array[middleIndex];

		if (item === middleItem) return middleItem;

		if (item > middleItem) {
			startIndex = middleIndex + 1;
		}

		if (item < middleItem) {
			endIndex = middleIndex - 1;
		}
	}

	return null;
};
