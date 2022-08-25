// task type - priorities to be added later!
export type Task = {
    id: string;
    text: string;
    status: TaskStatus;
};

// for task's column status
export enum TaskStatus {
    TODO = 'To Do',
    DOING = 'Doing',
    DONE = 'Done',
};

export type TaskState = {
    todo: Task [];
    doing: Task[];
    done: Task[];
    edit: Task | null;
};