import type { GraphType } from '../types';

export const breadthFirstSearch = (graph: GraphType, start: string, end: string) => {
	let queue = [];
	queue.push(start);

	while (queue.length > 0) {
		const current = queue.shift() as string;
		if (!graph[current]) {
			graph[current] = [];
		}
		if (graph[current].includes(end)) {
			return true;
		} else {
			queue = [...queue, ...graph[current]];
		}
	}
	return false;
};
