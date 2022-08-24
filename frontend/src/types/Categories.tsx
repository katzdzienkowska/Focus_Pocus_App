export type CategoryId = number;
export type CategoryName = string;

export interface ICategory {
    id: CategoryId;
    name: CategoryName;
};

export interface ICreateCategory {
    test: CategoryName;
};

