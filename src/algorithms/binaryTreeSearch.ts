import { Tree, TreeNode } from './../types';

export const binaryTreeSearch = (tree: Tree) => {
	if (!tree.length) return 0;

	let value = 0;
	const stack: TreeNode[] = [];

	tree.forEach((treeNode: TreeNode) => {
		stack.push(treeNode);
	});

	while (stack.length > 0) {
		const node = stack.pop() as TreeNode;

		value += node.value;

		if (node.children) {
			node.children.forEach(node => {
				stack.push(node);
			});
		}
	}

	return value;
};
