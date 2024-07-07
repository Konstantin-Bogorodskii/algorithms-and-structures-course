import { DeepGraphType } from '../types';

export function shortPathSearch(graph: DeepGraphType, start: string, end: string) {
	const costs: any = {};
	const processed: any = [];
	let neighbors: any = {};
	Object.keys(graph).forEach(node => {
		if (node !== start) {
			let value = graph[start][node];
			costs[node] = value || 100000000;
		}
	});
	let node = findNodeLowestCost(costs, processed);
	while (node) {
		const cost = costs[node];
		neighbors = graph[node];
		Object.keys(neighbors).forEach(neighbor => {
			let newCost = cost + neighbors[neighbor];
			if (newCost < costs[neighbor]) {
				costs[neighbor] = newCost;
			}
		});
		processed.push(node);
		node = findNodeLowestCost(costs, processed);
	}
	return costs;
}

function findNodeLowestCost(costs: any, processed: any) {
	let lowestCost = 100000000;
	let lowestNode;
	Object.keys(costs).forEach(node => {
		let cost = costs[node];
		if (cost < lowestCost && !processed.includes(node)) {
			lowestCost = cost;
			lowestNode = node;
		}
	});
	return lowestNode;
}
