export interface CategoryNode {
    id: number;
    name: string;
    level: number;
    expanded?: boolean;
    subcategories?: any[];
    active?: boolean;
}

export interface CategoryBanner {
    id: number;
    title?: string;
    desc?: string;
    imageUrl?: string;
    categoryId?: number;
}


