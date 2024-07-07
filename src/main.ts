import {
	linearSearch,
	binarySearch,
	selectionSort,
	bubbleSort,
	factorial,
	fibonacci,
	quickSort,
	breadthFirstSearch,
	shortPathSearch,
	recursiveTreeSearch,
	binaryTreeSearch
} from './algorithms';

import { GraphType } from './types';

const UNSORTED_ARRAY = [1, 3, 2, 8, 12, 5, 20, 0, -5, 15, 17];
const SORTED_ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15];

const TREE = [
	{
		value: 5,
		children: [
			{
				value: 10,
				children: [
					{
						value: 11
					}
				]
			},
			{
				value: 7,
				children: [
					{
						value: 5,
						children: [
							{
								value: 1
							}
						]
					}
				]
			}
		]
	},
	{
		value: 5,
		children: [
			{
				value: 10
			},
			{
				value: 15
			}
		]
	}
];

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

// console.log('quickSort(UNSORTED_ARRAY) ==>', quickSort(UNSORTED_ARRAY));

// const graph: GraphType = {};
// graph.a = ['b', 'c'];
// graph.b = ['f'];
// graph.c = ['d', 'e'];
// graph.d = ['f'];
// graph.e = ['f'];
// graph.f = ['g'];
// console.log(breadthFirstSearch(graph, 'a', 'e'));

// const graph: Record<string, Record<string, number>> = {};
// graph.a = { b: 2, c: 1 };
// graph.b = { f: 7 };
// graph.c = { d: 5, e: 2 };
// graph.d = { f: 2 };
// graph.e = { f: 1 };
// graph.f = { g: 1 };
// graph.g = {};

// console.log('shortPathSearch(graph) ==>', shortPathSearch(graph, 'a', 'b'));

// console.log('recursiveTreeSearch(TREE) ==>', recursiveTreeSearch(TREE));
// console.log('binaryTreeSearch(TREE) ==>', binaryTreeSearch(TREE));
