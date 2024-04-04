// extension types

export type Todo = {
  text: string
  completed: boolean
}

export type Intention = {
  name: string
  duration: number
  todos?: Todo[]
  locked?: boolean
}
