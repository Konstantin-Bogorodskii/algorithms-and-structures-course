import { Tree } from './../types';

export const recursiveTreeSearch = (tree: Tree) => {
	let value = 0;

	tree.forEach(node => {
		value += node.value;

		if (!node.children) {
			return value;
		}

		value += recursiveTreeSearch(node.children);
	});

	return value;
};
