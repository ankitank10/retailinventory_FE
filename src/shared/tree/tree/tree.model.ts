export interface TreeNode {
    id: number;
    name: string;
    level: number;
    expanded?: boolean;
    subcategories?: any[];
    active?: boolean;
}
