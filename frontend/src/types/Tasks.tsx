import { CategoryId } from "./Categories";

export enum TaskPriorityEnum {
    LOW = 'Low',
    MEDIUM = 'Medium',
    HIGH = 'High'
};

export type TaskId = number;
export type TaskText = string;
export type TaskCompleted = boolean;

export interface ITask {
    id: TaskId;
    text: TaskText;
    priority: TaskPriorityEnum;
    completed: TaskCompleted;
    categoriesIds: CategoryId[];
};