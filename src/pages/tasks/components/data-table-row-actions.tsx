"use client"

import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Row, RowData } from "@tanstack/react-table"

import { Button } from "@ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@ui/dropdown-menu"
import { ITask, TaskStatus } from "@domain"
import { statuses } from "../data/data"
import { TaskService } from "@service"
import { toast } from "@/hooks/use-toast"

interface DataTableRowActionsProps<TData> {
  row: Row<TData>,
  table: any
}

declare module '@tanstack/react-table' {
  interface TableMeta<TData extends RowData> {
    reload: () => void
  }
}

export function DataTableRowActions<TData>({
  row,
  table,
}: DataTableRowActionsProps<TData>) {
  const task: ITask = row.original

  const handleDeleteTask = () => {
    TaskService.delete(task)
    .then((task: ITask) => {
      table.options.meta?.reload()
      toast({
        title: "Delete Task success"
      })
    }, () => {
      toast({
        variant: "destructive",
        title: "Delete Task failed"
      })
    })
  }

  const handleUpdateStatusTask = (status: TaskStatus) => {
    TaskService.updateStatus(task, status)
    .then(() => {
      table.options.meta?.reload()
      toast({
        title: "Update Status success"
      })
    }, () => {
      toast({
        variant: "destructive",
        title: "Update Status failed"
      })
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem disabled>Edit</DropdownMenuItem>
        <DropdownMenuItem disabled>Make a copy</DropdownMenuItem>
        <DropdownMenuItem disabled>Favorite</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Status</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuRadioGroup value={task.status}>
              {statuses.map((status) => (
                <DropdownMenuRadioItem key={status.value} value={status.value} onClick={() => handleUpdateStatusTask(status.value)}>
                  {status.label}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleDeleteTask}>
          Delete
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
