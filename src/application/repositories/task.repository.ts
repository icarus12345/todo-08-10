import { ITask, TaskStatus } from "@domain";
import { BackendApi } from "@adapt";
import { TaskTransform } from "@transform";

export class TaskRepository {
  public static async getList(): Promise<ITask[]> {
    try {
      const res = await BackendApi.get('/tasks')
      return TaskTransform.convertToDtoResource(res.data)
    } catch (error) {
      return []
    }
  }

  public static async create(task: ITask): Promise<Nullable<ITask>> {
    try {
      const raw = TaskTransform.convertToRaw(task)
      // TODO: default value from API SAVE
      raw.id = 'TASK-' + new Date().getTime() % 10000
      raw.label = 'feature'
      raw.status = 'todo'
      const res = await BackendApi.post('/tasks', raw)
      return TaskTransform.convertToDto(res.data)
    } catch (error) {
      return null
    }
  }

  public static async delete(task: ITask): Promise<boolean> {
    try {
      const res = await BackendApi.delete(`/tasks/${task.id}`)
      return !!res;
    } catch (error) {
      return false
    }
  }

  public static async updateStatus(task: ITask, status: TaskStatus): Promise<Nullable<ITask>> {
    try {
      const res = await BackendApi.patch(`/tasks/${task.id}`, {
        status
      })
      return !!res;
    } catch (error) {
      return false
    }
  }
}