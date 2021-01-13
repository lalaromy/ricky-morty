import React, { Fragment, useState } from 'react';

type FormElem = React.FormEvent<HTMLFormElement>
// type is referencing another already existing type

interface ITodo {
  text: string
  complete: boolean
}
// interface is creating a complete new Type
// <ITodo> if you leave it like this it is just an object
// in order for it to be an array you put [] 
// --> <ITodo[]>

interface ITodo2 extends ITodo {
  tags: string[] // array of strings
}
// if I want to borrow what is already in ITodo then I write extends ITodo

export default function App(): JSX.Element {
  const [value, setValue] = useState<string>("")
  const [todos, setTodos] = useState<ITodo[]>([])
  const handleSubmit = (e: FormElem): void => {
    e.preventDefault()
    addTodo(value)
    setValue('')
  }

  const addTodo = (text: string) => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }]
    setTodos(newTodos)
  }

  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos]
    newTodos[index].complete = !newTodos[index].complete
    setTodos(newTodos)
  }

  const removeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <Fragment>
      <h1>TodoList</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={e => setValue(e.target.value)} required />
        <button type="submit">Add Todo</button>
      </form>

      <section>
        {todos.map((todo: ITodo, index: number) => (
          <Fragment key={index}>
            <div style={{ textDecoration: todo.complete ? 'line-through' : '' }}>{todo.text}</div>
            <button type="button" onClick={() => completeTodo(index)}>
              {!todo.complete ? 'incomplete' : 'complete'}
            </button>
            <button type="button" onClick={() => removeTodo(index)}>
              Remove
            </button>
          </Fragment>
        ))}
      </section>
    </Fragment>
  )
}

