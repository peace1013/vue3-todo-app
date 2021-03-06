import { DeepReadonly } from 'vue'

export type Status = 'waiting' | 'working' | 'completed' | 'pending'

export interface Todo {
  id: number
  title: string
  description: string
  status: Status
}

export interface TodoState {
  todos: Todo[]
}

export type Params = Pick<Todo, 'title' | 'description' | 'status'>

export interface TodoStore {
  state: DeepReadonly<TodoState>
  fetchTodos: () => void
  fetchTodo: (id: number) => void
  getTodo: (id: number) => Todo
  addTodo: (todo: Params) => void
  updateTodo: (id: number, todo: Todo) => void
  deleteTodo: (id: number) => void
}
