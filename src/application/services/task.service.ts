import { TaskRepository } from "@repo";
import { ITask, TaskStatus } from "@domain";

export class TaskService {
  public static async getList(): Promise<ITask[]> {
    return await TaskRepository.getList()
  }

  public static async create(task: ITask): Promise<Nullable<ITask>> {
    return await TaskRepository.create(task)
  }

  public static async delete(task: ITask): Promise<Nullable<ITask>> {
    return await TaskRepository.delete(task)
  }

  public static async updateStatus(task: ITask, status: TaskStatus): Promise<Nullable<ITask>> {
    return await TaskRepository.updateStatus(task, status)
  }
}