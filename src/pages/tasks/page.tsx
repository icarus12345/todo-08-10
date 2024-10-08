import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { TaskForm } from "./components/task-form"
import { UserNav } from "./components/user-nav"
import { ITask } from "@domain"
import { useRef } from 'react';

export default function TaskPage() {
  const tableRef = useRef()
  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <UserNav />
          </div>
        </div>
        <TaskForm onAddTaskSuccess={() => tableRef.current.reload()} />
        <DataTable columns={columns} ref={tableRef} />
      </div>
    </>
  )
}
