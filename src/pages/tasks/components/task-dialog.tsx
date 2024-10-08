import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@ui/dialog"
import { Button } from '@ui/button'
import { TaskForm } from "./task-form"
import { useState } from 'react'
import { ITask } from '@domain'

export function TaskDetailDialog({ onAddTaskSuccess }) {
  const [open, setOpen] = useState(false)
  const onAddTaskCallback = (task: ITask) => {
    setOpen(false)
    onAddTaskSuccess(task)
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="ml-2">Add a Task</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add a Task</DialogTitle>
          <DialogDescription>
            Bonus function
          </DialogDescription>
        </DialogHeader>
        <TaskForm onAddTaskSuccess={onAddTaskCallback} />
      </DialogContent>
    </Dialog>
  )
}