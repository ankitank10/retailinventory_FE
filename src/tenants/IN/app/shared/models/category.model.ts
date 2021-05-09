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

export interface QueryModel {
    limit?: number;
    isDiscounted?: boolean;
    discountMin?: number;
    discountMax?: number;
    color?: number;
    priceMin?: number;
    priceMax?: number;
}


