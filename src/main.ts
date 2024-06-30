import {
	linearSearch,
	binarySearch,
	selectionSort,
	bubbleSort,
	factorial,
	fibonacci,
	quickSort
} from './algorithms';

const UNSORTED_ARRAY = [1, 3, 2, 8, 12, 5, 20, 0, -5, 15, 17];
const SORTED_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15];

// console.log('linearSearch(array, 3) ==>', linearSearch(UNSORTED_ARRAY, 3));
// console.log('linearSearch(array, 30) ==>', linearSearch(UNSORTED_ARRAY, 30));
// console.log('linearSearch(array, -5) ==>', linearSearch(UNSORTED_ARRAY, -5));

// console.log('binarySearch(4) ==>', binarySearch(SORTED_ARRAY, 4));
// console.log('binarySearch(8) ==>', binarySearch(SORTED_ARRAY, 8));
// console.log('binarySearch(15) ==>', binarySearch(SORTED_ARRAY, 15));
// console.log('binarySearch(122) ==>', binarySearch(SORTED_ARRAY, 122));

// console.log('selectionSort(UNSORTED_ARRAY) ==>', selectionSort(UNSORTED_ARRAY));

// console.log('bubbleSort(UNSORTED_ARRAY) ==>', bubbleSort(UNSORTED_ARRAY));

// console.log('factorial(5) ==>', factorial(5));
// console.log('fibonacci(8) ==>', fibonacci(8));

console.log('quickSort(UNSORTED_ARRAY) ==>', quickSort(UNSORTED_ARRAY));
