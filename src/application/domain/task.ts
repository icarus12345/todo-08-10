export enum TaskPriorities {
  'low' = 'low',
  'medium' = 'medium',
  'high' = 'high',
}

export enum TaskStatus {
  'backlog' = 'backlog',
  'todo' = 'todo',
  'in-progress' = 'in-progress',
  'done' = 'done',
  'canceled' = 'canceled',
}

export interface ITask {
  id: Nullable<string>
  title: Nullable<string>
  status: Nullable<TaskStatus>
  label: Nullable<string>
  priority: Nullable<TaskPriorities>
}