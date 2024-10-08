import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircledIcon,
  CircleIcon,
  CrossCircledIcon,
  QuestionMarkCircledIcon,
  StopwatchIcon,
} from "@radix-ui/react-icons"
import { TaskPriorities, TaskStatus } from '@domain'
import { ITask } from "@domain"

export const labels = [
  {
    value: "bug",
    label: "Bug",
  },
  {
    value: "feature",
    label: "Feature",
  },
  {
    value: "documentation",
    label: "Documentation",
  },
]

export const statuses = [
  {
    value: TaskStatus.backlog,
    label: "Backlog",
    icon: QuestionMarkCircledIcon,
  },
  {
    value: TaskStatus.todo,
    label: "Todo",
    icon: CircleIcon,
  },
  {
    value: TaskStatus['in-progress'],
    label: "In Progress",
    icon: StopwatchIcon,
  },
  {
    value: TaskStatus.done,
    label: "Done",
    icon: CheckCircledIcon,
  },
  {
    value: TaskStatus.canceled,
    label: "Canceled",
    icon: CrossCircledIcon,
  },
]

export const priorities = [
  {
    label: "Low",
    value: TaskPriorities.low,
    icon: ArrowDownIcon,
  },
  {
    label: "Medium",
    value: TaskPriorities.medium,
    icon: ArrowRightIcon,
  },
  {
    label: "High",
    value: TaskPriorities.high,
    icon: ArrowUpIcon,
  },
]
