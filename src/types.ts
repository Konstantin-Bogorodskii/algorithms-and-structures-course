export type GraphType = Record<string, string[]>;
export type DeepGraphType = Record<string, Record<string, number>>;

export type Tree = TreeNode[];

export type TreeNode = {
	value: number;
	children?: TreeNode[];
};
