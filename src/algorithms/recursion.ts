export const factorial = (n: number): number => {
	if (n === 1) {
		return 1;
	}
	return n * factorial(n - 1);
};

export const fibonacci = (n: number): number => {
	if (n === 1 || n === 2) {
		return 1;
	}
	return fibonacci(n - 1) + fibonacci(n - 2);
};
