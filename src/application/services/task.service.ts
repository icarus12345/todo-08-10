import { TaskRepository } from "@repo";
import { ITask } from "@domain";

export class TaskService {
  public static async getList(): Promise<ITask[]> {
    return await TaskRepository.getList()
  }

  public static async create(task: ITask): Promise<Nullable<ITask>> {
    return await TaskRepository.create(task)
  }
}