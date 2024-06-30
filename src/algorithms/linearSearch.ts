export const linearSearch = (array: number[], item: number) => {
	if (!Array.isArray(array)) return null;
	if (array.length === 0) return null;

	for (let i = 0; i < array.length; i++) {
		if (array[i] === item) return i;
	}

	return null;
};
