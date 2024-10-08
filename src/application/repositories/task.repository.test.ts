import { expect, vi } from "vitest"
import { BackendApi } from "@adapt"
import { TaskRepository } from "@repo"
import { ITask } from "@domain"
import { beforeEach } from "node:test"

vi.mock('@adapt')

describe('TaskRepository Class', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  })
  describe('API Cant connect', () => {
    it('Should return empty task', async () => {
      BackendApi.get.mockRejectedValue(new Error('API ERROR'))
      const tasks: ITask = await TaskRepository.getList()
      expect(BackendApi.get).toHaveBeenCalled()
      expect(tasks).toStrictEqual([])
    })
  })
  describe('API Return empty data', () => {
    it('Should return empty task', async () => {
      BackendApi.get.mockResolvedValue({data: []})
      const tasks: ITask = await TaskRepository.getList()
      expect(BackendApi.get).toHaveBeenCalled()
      expect(tasks).toStrictEqual([])
    })
  })
  describe('API Return data', () => {
    it('Should return list task', async () => {
      BackendApi.get.mockResolvedValue({data: [{
        "id": "TASK-7878",
        "title": "Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",
        "status": "backlog",
        "label": "documentation",
        "priority": "medium"
      }]})
      const tasks: ITask = await TaskRepository.getList()
      expect(BackendApi.get).toHaveBeenCalled()
      expect(tasks).toStrictEqual([{
        "id": "TASK-7878",
        "title": "Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",
        "status": "backlog",
        "label": "documentation",
        "priority": "medium"
      }])
    })
  })
})