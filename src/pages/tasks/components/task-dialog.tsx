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

export function TaskDetailDialog() {
  const [open, setOpen] = useState(false)
  const onAddTaskCallback = (task: ITask) => {
    setOpen(false)
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
            Bonus function, so the list task don't reload data after add new task from the modal.
          </DialogDescription>
        </DialogHeader>
        <TaskForm onAddTaskSuccess={onAddTaskCallback} />
      </DialogContent>
    </Dialog>
  )
}