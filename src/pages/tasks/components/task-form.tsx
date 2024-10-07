import { zodResolver } from "@hookform/resolvers/zod"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"
import { Button } from "@ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@ui/command"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@ui/form"
import { Input } from "@ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@ui/popover"
import { priorities } from '../data/data';
import { ITask } from "@domain"
import { TaskService } from "@service"

const taskFormSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: "Title must be at least 2 characters.",
    })
    .max(30, {
      message: "Title must not be longer than 30 characters.",
    }),
  priority: z.string({
    required_error: "Please select a priority.",
  }),
})


// This can come from your database or API.
const defaultValues: Partial<ITask> = {
  title: '',
  priority: 'low',
}

export function TaskForm({ onAddTaskSuccess }) {
  const form = useForm<ITask>({
    resolver: zodResolver(taskFormSchema),
    defaultValues,
  })

  function onSubmit(task: ITask) {
    // const task: ITask = {}
    console.log(form);
    
    TaskService.create(task)
    .then((task: ITask) => {
      form.reset()
      onAddTaskSuccess(task)
      toast({
        title: "Add a Task success"
      })
    }, () => {
      toast({
        variant: "destructive",
        title: "Add a Task failed"
      })
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-xl space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Task title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="priority"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Priority</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-[200px] justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? priorities.find(
                            (priority) => priority.value === field.value
                          )?.label
                        : "Select priority"}
                      <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search priority..." />
                    <CommandList>
                      <CommandEmpty>No language found.</CommandEmpty>
                      <CommandGroup>
                        {priorities.map((priority) => (
                          <CommandItem
                            value={priority.label}
                            key={priority.value}
                            onSelect={() => {
                              form.setValue("priority", priority.value)
                            }}
                          >
                            <CheckIcon
                              className={cn(
                                "mr-2 h-4 w-4",
                                priority.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {priority.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Add a Task</Button>
      </form>
    </Form>
  )
}
