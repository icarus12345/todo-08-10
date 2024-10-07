import { ITask } from "@domain";

export interface ITaskDto {
  id: Nullable<string>
  title: Nullable<string>
  status: Nullable<string>
  label: Nullable<string>
  priority: Nullable<string>
}

export interface ITaskDto {}

export class TaskTransform {
  static convertToDto(taskDto: ITaskDto): ITask {
    return {
      id: taskDto.id,
      title: taskDto.title,
      status: taskDto.status,
      label: taskDto.label,
      priority: taskDto.priority,
    }
  }

  static convertToRaw(task: ITask): ITaskDto {
    return {
      id: task.id,
      title: task.title,
      status: task.status,
      label: task.label,
      priority: task.priority,
    }
  }

  static convertToDtoResource(tasksDto: ITaskDto[]): ITask[] {
    return tasksDto.map(TaskTransform.convertToDto)
  }
}